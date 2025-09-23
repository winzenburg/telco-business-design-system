// Figma API Integration for Design System
// import { Figma } from 'figma-api'; // Temporarily disabled for build

// Figma API configuration
interface FigmaConfig {
  accessToken: string;
  fileKey: string;
}

// Design token types from Figma
interface FigmaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface FigmaStyle {
  key: string;
  name: string;
  description: string;
  remote: boolean;
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  styles?: {
    fill?: string;
    stroke?: string;
    text?: string;
  };
  fills?: Array<{
    type: string;
    color?: FigmaColor;
    gradientStops?: Array<{
      position: number;
      color: FigmaColor;
    }>;
  }>;
  strokes?: Array<{
    type: string;
    color?: FigmaColor;
  }>;
  children?: FigmaNode[];
}

// Figma API client class (temporarily disabled for build)
export class FigmaDesignSystem {
  // private figma: Figma;
  private fileKey: string;

  constructor(config: FigmaConfig) {
    // this.figma = new Figma({
    //   personalAccessToken: config.accessToken,
    // });
    this.fileKey = config.fileKey;
  }

  // Get file information
  async getFile() {
    try {
      // const file = await this.figma.getFile(this.fileKey);
      throw new Error('Figma API temporarily disabled for build');
      return null;
    } catch (error) {
      // console.error('Error fetching Figma file:', error);
      throw error;
    }
  }

  // Get all styles from the file
  async getStyles() {
    try {
      // const styles = await this.figma.getFileStyles(this.fileKey);
      throw new Error('Figma API temporarily disabled for build');
      return null;
    } catch (error) {
      // console.error('Error fetching Figma styles:', error);
      throw error;
    }
  }

  // Get specific style by key
  async getStyle(styleKey: string) {
    try {
      // const style = await this.figma.getStyle(styleKey);
      throw new Error('Figma API temporarily disabled for build');
      return null;
    } catch (error) {
      // console.error('Error fetching Figma style:', error);
      throw error;
    }
  }

  // Extract color tokens from Figma styles and components
  async extractColorTokens(): Promise<Record<string, string>> {
    try {
      const colorTokens: Record<string, string> = {};

      // First, try to get colors from formal styles
      try {
        const styles = await this.getStyles();
        for (const style of styles.meta.styles) {
          if (style.styleType === 'FILL') {
            const styleData = await this.getStyle(style.key);
            if (styleData.style && styleData.style.fills && styleData.style.fills.length > 0) {
              const fill = styleData.style.fills[0];
              if (fill.type === 'SOLID' && fill.color) {
                const hexColor = this.rgbaToHex(fill.color);
                colorTokens[style.name] = hexColor;
              }
            }
          }
        }
      } catch (error) {
        // console.log('No formal styles found, extracting from components...');
      }

      // If no formal styles, extract from components and frames
      if (Object.keys(colorTokens).length === 0) {
        const file = await this.getFile();
        this.extractColorsFromNode(file.document, colorTokens);
      }

      return colorTokens;
    } catch (error) {
      // console.error('Error extracting color tokens:', error);
      throw error;
    }
  }

  // Recursively extract colors from any node
  private extractColorsFromNode(node: any, colorTokens: Record<string, string>) {
    if (!node) return;

    // Extract colors from fills
    if (node.fills && Array.isArray(node.fills)) {
      node.fills.forEach((fill: any) => {
        if (fill.type === 'SOLID' && fill.color) {
          const hexColor = this.rgbaToHex(fill.color);
          const colorName = this.generateColorName(node.name, hexColor);
          colorTokens[colorName] = hexColor;
        }
      });
    }

    // Extract colors from strokes
    if (node.strokes && Array.isArray(node.strokes)) {
      node.strokes.forEach((stroke: any) => {
        if (stroke.type === 'SOLID' && stroke.color) {
          const hexColor = this.rgbaToHex(stroke.color);
          const colorName = this.generateColorName(`${node.name}-stroke`, hexColor);
          colorTokens[colorName] = hexColor;
        }
      });
    }

    // Recursively process children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        this.extractColorsFromNode(child, colorTokens);
      });
    }
  }

  // Generate a meaningful color name
  private generateColorName(nodeName: string, hexColor: string): string {
    // Try to extract meaningful name from node name
    const cleanName = nodeName
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    return cleanName || `color-${hexColor.replace('#', '')}`;
  }

  // Extract typography tokens from Figma styles and text layers
  async extractTypographyTokens(): Promise<Record<string, any>> {
    try {
      const typographyTokens: Record<string, any> = {};

      // First, try to get typography from formal styles
      try {
        const styles = await this.getStyles();
        for (const style of styles.meta.styles) {
          if (style.styleType === 'TEXT') {
            const styleData = await this.getStyle(style.key);
            if (styleData.style && styleData.style.style) {
              const textStyle = styleData.style.style;
              typographyTokens[style.name] = {
                fontSize: textStyle.fontSize,
                fontFamily: textStyle.fontFamily,
                fontWeight: textStyle.fontWeight,
                lineHeight: textStyle.lineHeightPx,
                letterSpacing: textStyle.letterSpacing,
              };
            }
          }
        }
      } catch (error) {
        // console.log('No formal text styles found, extracting from text layers...');
      }

      // If no formal styles, extract from text layers
      if (Object.keys(typographyTokens).length === 0) {
        const file = await this.getFile();
        this.extractTypographyFromNode(file.document, typographyTokens);
      }

      return typographyTokens;
    } catch (error) {
      // console.error('Error extracting typography tokens:', error);
      throw error;
    }
  }

  // Recursively extract typography from text layers
  private extractTypographyFromNode(node: any, typographyTokens: Record<string, any>) {
    if (!node) return;

    // Extract typography from text layers
    if (node.type === 'TEXT' && node.style) {
      const textStyle = node.style;
      const styleName = this.generateTypographyName(node.name, textStyle.fontSize);

      typographyTokens[styleName] = {
        fontSize: textStyle.fontSize,
        fontFamily: textStyle.fontFamily,
        fontWeight: textStyle.fontWeight,
        lineHeight: textStyle.lineHeightPx || textStyle.lineHeightPercent,
        letterSpacing: textStyle.letterSpacing,
      };
    }

    // Recursively process children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        this.extractTypographyFromNode(child, typographyTokens);
      });
    }
  }

  // Generate a meaningful typography name
  private generateTypographyName(nodeName: string, fontSize: number): string {
    const cleanName = nodeName
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    // Map common font sizes to semantic names
    const sizeMap: Record<number, string> = {
      12: 'caption',
      14: 'body-small',
      16: 'body-medium',
      18: 'body-large',
      20: 'heading-4',
      24: 'heading-3',
      30: 'heading-2',
      36: 'heading-1',
      48: 'display-small',
      60: 'display-medium',
      72: 'display-large',
    };

    const sizeName = sizeMap[fontSize] || `text-${fontSize}`;
    return cleanName || sizeName;
  }

  // Extract spacing tokens from Figma components and layouts
  async extractSpacingTokens(): Promise<Record<string, number>> {
    try {
      const file = await this.getFile();
      const spacingTokens: Record<string, number> = {};

      // Extract spacing from layout and padding
      this.extractSpacingFromNode(file.document, spacingTokens);

      return spacingTokens;
    } catch (error) {
      // console.error('Error extracting spacing tokens:', error);
      throw error;
    }
  }

  // Recursively extract spacing from layout
  private extractSpacingFromNode(node: any, spacingTokens: Record<string, number>) {
    if (!node) return;

    // Extract padding values
    if (node.paddingLeft || node.paddingRight || node.paddingTop || node.paddingBottom) {
      const paddings = [
        node.paddingLeft,
        node.paddingRight,
        node.paddingTop,
        node.paddingBottom,
      ].filter(Boolean);

      paddings.forEach((padding: number) => {
        if (padding > 0) {
          const spacingName = this.generateSpacingName(padding);
          spacingTokens[spacingName] = padding;
        }
      });
    }

    // Extract gap values from auto-layout
    if (node.itemSpacing !== undefined && node.itemSpacing > 0) {
      const spacingName = this.generateSpacingName(node.itemSpacing);
      spacingTokens[spacingName] = node.itemSpacing;
    }

    // Extract margin-like spacing from positioning
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any, index: number) => {
        if (index > 0 && child.x !== undefined) {
          const prevChild = node.children[index - 1];
          if (prevChild.x !== undefined && prevChild.width !== undefined) {
            const spacing = child.x - (prevChild.x + prevChild.width);
            if (spacing > 0) {
              const spacingName = this.generateSpacingName(spacing);
              spacingTokens[spacingName] = spacing;
            }
          }
        }
      });
    }

    // Recursively process children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        this.extractSpacingFromNode(child, spacingTokens);
      });
    }
  }

  // Generate a meaningful spacing name
  private generateSpacingName(value: number): string {
    // Map common spacing values to semantic names
    const spacingMap: Record<number, string> = {
      4: '1',
      8: '2',
      12: '3',
      16: '4',
      20: '5',
      24: '6',
      32: '8',
      40: '10',
      48: '12',
      64: '16',
      80: '20',
      96: '24',
    };

    return spacingMap[value] || value.toString();
  }

  // Convert RGBA color to hex
  private rgbaToHex(color: FigmaColor): string {
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);
    const a = Math.round(color.a * 255);

    const toHex = (n: number) => {
      const hex = n.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}${a < 255 ? toHex(a) : ''}`;
  }

  // Extract component information from Figma
  async extractComponents(): Promise<Record<string, any>> {
    try {
      const file = await this.getFile();
      const components: Record<string, any> = {};

      this.extractComponentsFromNode(file.document, components);

      return components;
    } catch (error) {
      // console.error('Error extracting components:', error);
      throw error;
    }
  }

  // Recursively extract component information
  private extractComponentsFromNode(node: any, components: Record<string, any>) {
    if (!node) return;

    // Extract component information
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      const componentInfo = {
        name: node.name,
        type: node.type,
        description: node.description || '',
        width: node.absoluteBoundingBox?.width,
        height: node.absoluteBoundingBox?.height,
        children: node.children?.length || 0,
      };

      components[node.name] = componentInfo;
    }

    // Recursively process children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => {
        this.extractComponentsFromNode(child, components);
      });
    }
  }

  // Generate design tokens file from Figma
  async generateDesignTokens(): Promise<{
    colors: Record<string, string>;
    typography: Record<string, any>;
    spacing: Record<string, number>;
    components: Record<string, any>;
  }> {
    try {
      const [colors, typography, spacing, components] = await Promise.all([
        this.extractColorTokens(),
        this.extractTypographyTokens(),
        this.extractSpacingTokens(),
        this.extractComponents(),
      ]);

      return {
        colors,
        typography,
        spacing,
        components,
      };
    } catch (error) {
      // console.error('Error generating design tokens:', error);
      throw error;
    }
  }

  // Export design tokens to file
  async exportDesignTokens(outputPath: string) {
    try {
      const tokens = await this.generateDesignTokens();

      // Create the tokens file content
      const tokensContent = `// Auto-generated from Figma
// Generated on: ${new Date().toISOString()}

export const figmaColors = ${JSON.stringify(tokens.colors, null, 2)};

export const figmaTypography = ${JSON.stringify(tokens.typography, null, 2)};

export const figmaSpacing = ${JSON.stringify(tokens.spacing, null, 2)};
`;

      // In a real implementation, you would write this to a file
      // console.log('Design tokens generated:', tokensContent);

      return tokens;
    } catch (error) {
      // console.error('Error exporting design tokens:', error);
      throw error;
    }
  }
}

// Utility function to create Figma client
export const createFigmaClient = (accessToken: string, fileKey: string): FigmaDesignSystem => {
  return new FigmaDesignSystem({ accessToken, fileKey });
};

// Example usage
export const figmaExample = async () => {
  // You'll need to get these from your Figma account
  const accessToken = process.env.FIGMA_ACCESS_TOKEN || '';
  const fileKey = process.env.FIGMA_FILE_KEY || '';

  if (!accessToken || !fileKey) {
    // console.warn('Please set FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY environment variables');
    return;
  }

  const figma = createFigmaClient(accessToken, fileKey);

  try {
    const tokens = await figma.generateDesignTokens();
    // console.log('Figma design tokens:', tokens);
  } catch (error) {
    // console.error('Error fetching Figma tokens:', error);
  }
};
