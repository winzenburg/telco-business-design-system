import * as React from 'react';
import { z } from 'zod';
import { cn } from '../../utils/cn';
import { Button } from '../../../packages/components/ui/button';
import { Avatar } from '../../../packages/components/ui/avatar';

/**
 * Conversational Wizard - Lemonade/Maya Pattern
 *
 * Best Practice: Chat-like interface makes form-filling feel like conversation
 * Research: Lemonade achieved 90% bot-driven sales using conversational UI
 * Completion time: 90 seconds average (vs 5-10 minutes for traditional forms)
 *
 * When to Use:
 * - Consumer-facing products
 * - Mobile-first experiences
 * - Casual, friendly brand voice
 * - Complex information gathering (insurance, loans, quotes)
 *
 * Examples:
 * - Lemonade insurance quotes
 * - Drift chatbot qualification
 * - Intercom product tours
 */

export interface ConversationMessage<TData = any> {
  id: string;
  question: string;
  field: React.ReactNode;
  schema?: z.ZodSchema<any>;
  formatResponse?: (value: any) => string;
  condition?: (data: Partial<TData>) => boolean;
}

export interface ConversationalWizardProps<TData = any> {
  messages: ConversationMessage<TData>[];
  data: Partial<TData>;
  onDataChange: (data: Partial<TData>) => void;
  onComplete: (data: TData) => void;
  botName?: string;
  botAvatar?: string;
  className?: string;
}

interface ChatBubble {
  type: 'bot' | 'user';
  content: React.ReactNode;
  timestamp: Date;
}

export function ConversationalWizard<TData = any>({
  messages,
  data,
  onDataChange,
  onComplete,
  botName = 'Assistant',
  botAvatar,
  className,
}: ConversationalWizardProps<TData>) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [chatHistory, setChatHistory] = React.useState<ChatBubble[]>([]);
  const [isTyping, setIsTyping] = React.useState(true);
  const [errors, setErrors] = React.useState<string[]>([]);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  // Filter visible messages based on conditions
  const visibleMessages = React.useMemo(() => {
    return messages.filter((msg) => !msg.condition || msg.condition(data));
  }, [messages, data]);

  const currentMessage = visibleMessages[currentIndex];
  const isComplete = currentIndex >= visibleMessages.length;

  // Auto-scroll to bottom
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  // Show next question after delay (simulates typing)
  React.useEffect(() => {
    if (!currentMessage || isComplete) return;

    // Check if this question already shown
    const alreadyShown = chatHistory.some(
      (bubble) =>
        bubble.type === 'bot' &&
        typeof bubble.content === 'string' &&
        bubble.content === currentMessage.question,
    );

    if (!alreadyShown) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          {
            type: 'bot',
            content: currentMessage.question,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000); // 1s typing delay

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, currentMessage, isComplete]);

  const validateCurrent = async (value: any): Promise<boolean> => {
    if (!currentMessage.schema) return true;

    try {
      await currentMessage.schema.parseAsync({ [currentMessage.id]: value });
      setErrors([]);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues.map((e) => e.message));
      }
      return false;
    }
  };

  const handleSubmit = async (value: any) => {
    const isValid = await validateCurrent(value);
    if (!isValid) return;

    // Format user response
    const responseText = currentMessage.formatResponse
      ? currentMessage.formatResponse(value)
      : String(value);

    // Add user's response to chat
    setChatHistory((prev) => [
      ...prev,
      {
        type: 'user',
        content: responseText,
        timestamp: new Date(),
      },
    ]);

    // Update data
    const newData = { ...data, [currentMessage.id]: value };
    onDataChange(newData);

    // Move to next or complete
    if (currentIndex >= visibleMessages.length - 1) {
      onComplete(newData as TData);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setErrors([]);
    }
  };

  if (isComplete) {
    return (
      <div className={cn('w-full max-w-2xl mx-auto text-center py-20', className)}>
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">All Done!</h2>
        <p className="text-neutral-600">Thanks for chatting with {botName}</p>
      </div>
    );
  }

  return (
    <div className={cn('w-full max-w-2xl mx-auto flex flex-col h-screen', className)}>
      {/* Chat Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
            {botName[0]}
          </div>
        </Avatar>
        <div>
          <p className="font-semibold">{botName}</p>
          <p className="text-xs text-neutral-500">
            {isTyping ? 'typing...' : 'online'}
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-neutral-50">
        {chatHistory.map((bubble, index) => (
          <div
            key={index}
            className={cn(
              'flex gap-3 animate-in slide-in-from-bottom-2',
              bubble.type === 'user' && 'flex-row-reverse',
            )}
          >
            {bubble.type === 'bot' && (
              <Avatar className="h-8 w-8 flex-shrink-0">
                <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-semibold">
                  {botName[0]}
                </div>
              </Avatar>
            )}

            <div
              className={cn(
                'rounded-2xl px-4 py-3 max-w-[75%]',
                bubble.type === 'bot'
                  ? 'bg-white border border-neutral-200 rounded-tl-sm'
                  : 'bg-primary-500 text-white rounded-tr-sm',
              )}
            >
              <p className="text-sm">{bubble.content}</p>
              <p
                className={cn(
                  'text-xs mt-1',
                  bubble.type === 'bot' ? 'text-neutral-500' : 'text-primary-100',
                )}
              >
                {bubble.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-in slide-in-from-bottom-2">
            <Avatar className="h-8 w-8">
              <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-semibold">
                {botName[0]}
              </div>
            </Avatar>
            <div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      {!isTyping && currentMessage && (
        <div className="bg-white border-t border-neutral-200 px-6 py-4">
          {errors.length > 0 && (
            <div className="mb-3 bg-destructive-50 border border-destructive-300 rounded-lg p-3">
              {errors.map((error, i) => (
                <p key={i} className="text-sm text-destructive-700">
                  {error}
                </p>
              ))}
            </div>
          )}

          <div className="flex gap-2 items-end">
            <div className="flex-1">{currentMessage.field}</div>
          </div>

          <p className="text-xs text-neutral-500 mt-2">
            Question {currentIndex + 1} of {visibleMessages.length}
          </p>
        </div>
      )}
    </div>
  );
}
