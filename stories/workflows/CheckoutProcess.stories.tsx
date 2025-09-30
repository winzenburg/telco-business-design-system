import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Badge,
  Separator,
  Alert,
  AlertDescription,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Checkbox,
} from '../../src/components';
import { Combobox } from '../../src/components/ui/combobox';
import { DatePicker } from '../../src/components/ui/date-picker';
import { ShoppingCart, CreditCard, Lock, Truck, Package, Plus, Minus, X, Calendar, AlertCircle } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Checkout Process',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete e-commerce checkout flow showcasing cart management, payment processing, validation, and order confirmation. Demonstrates all form components with proper error handling and the 5-state model.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

interface FormErrors {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  billingAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  email?: string;
  phone?: string;
  installationDate?: string;
}

const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const CheckoutFlow = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Business Internet 1 Gig',
      description: 'Ultra-fast fiber internet for your business',
      price: 149.99,
      quantity: 1,
      category: 'Internet',
    },
    {
      id: '2',
      name: 'Business Voice',
      description: 'Cloud-based phone system with unlimited calling',
      price: 39.99,
      quantity: 3,
      category: 'Voice',
    },
    {
      id: '3',
      name: 'Security Edge',
      description: 'Advanced threat protection for your network',
      price: 29.99,
      quantity: 1,
      category: 'Security',
    },
  ]);

  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
  });

  const [billingInfo, setBillingInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [shippingMethod, setShippingMethod] = useState('standard');
  const [installationDate, setInstallationDate] = useState<Date>();
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [savePayment, setSavePayment] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Contact validation
    if (!contactInfo.email || !/\S+@\S+\.\S+/.test(contactInfo.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!contactInfo.phone || !/^\d{10}$/.test(contactInfo.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    // Payment validation
    if (!billingInfo.cardNumber || billingInfo.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Valid 16-digit card number is required';
    }
    if (!billingInfo.cardHolder || billingInfo.cardHolder.length < 3) {
      newErrors.cardHolder = 'Cardholder name is required';
    }
    if (!billingInfo.expiryDate || !/^\d{2}\/\d{2}$/.test(billingInfo.expiryDate)) {
      newErrors.expiryDate = 'Format: MM/YY';
    }
    if (!billingInfo.cvv || billingInfo.cvv.length < 3) {
      newErrors.cvv = '3 or 4 digits required';
    }

    // Address validation
    if (!billingInfo.billingAddress || billingInfo.billingAddress.length < 5) {
      newErrors.billingAddress = 'Street address is required';
    }
    if (!billingInfo.city || billingInfo.city.length < 2) {
      newErrors.city = 'City is required';
    }
    if (!billingInfo.state) {
      newErrors.state = 'State is required';
    }
    if (!billingInfo.zipCode || !/^\d{5}(-\d{4})?$/.test(billingInfo.zipCode)) {
      newErrors.zipCode = 'Valid ZIP code is required';
    }

    // Installation date validation
    if (!installationDate) {
      newErrors.installationDate = 'Please select an installation date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!agreeToTerms) {
      alert('Please agree to the Terms of Service to continue');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Order placed successfully!');
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shippingCost = shippingMethod === 'express' ? 25 : shippingMethod === 'overnight' ? 45 : 0;
  const total = subtotal + tax + shippingCost;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-[var(--ds-color-text-muted)] mt-1">
          Complete your order in a few simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart Items */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  <CardTitle>Your Cart</CardTitle>
                </div>
                <Badge variant="secondary">{cartItems.length} items</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-[var(--ds-color-text-muted)]">
                            {item.description}
                          </div>
                          <Badge variant="secondary" className="mt-1">{item.category}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                We'll use this information to send order updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@business.com"
                    value={contactInfo.email}
                    onChange={(e) => {
                      setContactInfo({ ...contactInfo, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    error={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={contactInfo.phone}
                    onChange={(e) => {
                      setContactInfo({ ...contactInfo, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    error={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <CardTitle>Payment Information</CardTitle>
              </div>
              <CardDescription>
                <div className="flex items-center gap-1 text-xs">
                  <Lock className="h-3 w-3" />
                  Secure checkout powered by Stripe
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="cardNumber">
                    Card Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={billingInfo.cardNumber}
                    onChange={(e) => {
                      setBillingInfo({ ...billingInfo, cardNumber: e.target.value });
                      if (errors.cardNumber) setErrors({ ...errors, cardNumber: undefined });
                    }}
                    error={!!errors.cardNumber}
                  />
                  {errors.cardNumber && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.cardNumber}
                    </p>
                  )}
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="cardHolder">
                    Cardholder Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cardHolder"
                    placeholder="John Doe"
                    value={billingInfo.cardHolder}
                    onChange={(e) => {
                      setBillingInfo({ ...billingInfo, cardHolder: e.target.value });
                      if (errors.cardHolder) setErrors({ ...errors, cardHolder: undefined });
                    }}
                    error={!!errors.cardHolder}
                  />
                  {errors.cardHolder && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.cardHolder}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">
                    Expiry Date <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={billingInfo.expiryDate}
                    onChange={(e) => {
                      setBillingInfo({ ...billingInfo, expiryDate: e.target.value });
                      if (errors.expiryDate) setErrors({ ...errors, expiryDate: undefined });
                    }}
                    error={!!errors.expiryDate}
                  />
                  {errors.expiryDate && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.expiryDate}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">
                    CVV <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={billingInfo.cvv}
                    onChange={(e) => {
                      setBillingInfo({ ...billingInfo, cvv: e.target.value });
                      if (errors.cvv) setErrors({ ...errors, cvv: undefined });
                    }}
                    error={!!errors.cvv}
                  />
                  {errors.cvv && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Billing Address</h4>
                <div className="space-y-2">
                  <Label htmlFor="address">
                    Street Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    value={billingInfo.billingAddress}
                    onChange={(e) => {
                      setBillingInfo({ ...billingInfo, billingAddress: e.target.value });
                      if (errors.billingAddress) setErrors({ ...errors, billingAddress: undefined });
                    }}
                    error={!!errors.billingAddress}
                  />
                  {errors.billingAddress && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.billingAddress}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">
                      City <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="city"
                      placeholder="Philadelphia"
                      value={billingInfo.city}
                      onChange={(e) => {
                        setBillingInfo({ ...billingInfo, city: e.target.value });
                        if (errors.city) setErrors({ ...errors, city: undefined });
                      }}
                      error={!!errors.city}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.city}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">
                      State <span className="text-destructive">*</span>
                    </Label>
                    <Combobox
                      options={US_STATES}
                      value={billingInfo.state}
                      onValueChange={(value) => {
                        setBillingInfo({ ...billingInfo, state: value });
                        if (errors.state) setErrors({ ...errors, state: undefined });
                      }}
                      placeholder="Select state"
                      searchPlaceholder="Search states..."
                      error={!!errors.state}
                      width="w-full"
                    />
                    {errors.state && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.state}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">
                      ZIP Code <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="zip"
                      placeholder="19101"
                      value={billingInfo.zipCode}
                      onChange={(e) => {
                        setBillingInfo({ ...billingInfo, zipCode: e.target.value });
                        if (errors.zipCode) setErrors({ ...errors, zipCode: undefined });
                      }}
                      error={!!errors.zipCode}
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="save-payment"
                  checked={savePayment}
                  onCheckedChange={setSavePayment}
                />
                <Label htmlFor="save-payment">
                  Save payment information for future purchases
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Installation & Setup */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <CardTitle>Installation & Setup</CardTitle>
              </div>
              <CardDescription>
                Choose your preferred installation speed and date
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Installation Speed <span className="text-destructive">*</span></Label>
                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="space-y-3">
                    <Card className="p-4">
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="standard" id="standard-shipping" />
                        <div className="flex-1">
                          <Label htmlFor="standard-shipping" className="font-medium">
                            Standard Installation
                          </Label>
                          <p className="text-sm text-[var(--ds-color-text-muted)]">
                            Professional installation within 5-7 business days
                          </p>
                          <Badge variant="secondary" className="mt-1">Free</Badge>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="express" id="express-shipping" />
                        <div className="flex-1">
                          <Label htmlFor="express-shipping" className="font-medium">
                            Express Installation
                          </Label>
                          <p className="text-sm text-[var(--ds-color-text-muted)]">
                            Priority installation within 2-3 business days
                          </p>
                          <Badge variant="secondary" className="mt-1">$25.00</Badge>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="overnight" id="overnight-shipping" />
                        <div className="flex-1">
                          <Label htmlFor="overnight-shipping" className="font-medium">
                            Next Business Day
                          </Label>
                          <p className="text-sm text-[var(--ds-color-text-muted)]">
                            Emergency installation by next business day
                          </p>
                          <Badge variant="secondary" className="mt-1">$45.00</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="installation-date">
                  Preferred Installation Date <span className="text-destructive">*</span>
                </Label>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-3 text-[var(--ds-color-text-muted)]" />
                  <div className="flex-1">
                    <DatePicker
                      value={installationDate}
                      onChange={(date) => {
                        setInstallationDate(date);
                        if (errors.installationDate) setErrors({ ...errors, installationDate: undefined });
                      }}
                      placeholder="Select a date"
                    />
                    {errors.installationDate && (
                      <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.installationDate}
                      </p>
                    )}
                    <p className="text-xs text-[var(--ds-color-text-muted)] mt-1">
                      We'll contact you 24 hours before the scheduled installation
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-instructions">
                  Special Instructions (Optional)
                </Label>
                <Textarea
                  id="special-instructions"
                  placeholder="Please provide any specific requirements for the installation team (e.g., access instructions, parking information, business hours)"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={4}
                />
                <p className="text-xs text-[var(--ds-color-text-muted)]">
                  {specialInstructions.length}/500 characters
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[var(--ds-color-text-muted)]">
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}/mo</span>
              </div>

              <Alert>
                <Package className="h-4 w-4" />
                <AlertDescription>
                  Your first month includes a one-time setup fee of $99.99
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="flex items-start space-x-2 w-full">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the <a href="#" className="text-primary-500 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-500 hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={isSubmitting || !agreeToTerms}
              >
                {isSubmitting ? 'Processing...' : 'Complete Order'}
                {!isSubmitting && <Lock className="ml-2 h-4 w-4" />}
              </Button>
              <p className="text-xs text-center text-[var(--ds-color-text-muted)]">
                Your information is secure and encrypted
              </p>
            </CardFooter>
          </Card>

          <Card className="sticky top-[calc(100vh-200px)]">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-[var(--ds-color-text-muted)]">
                <Lock className="h-4 w-4 flex-shrink-0" />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--ds-color-text-muted)]">
                <Package className="h-4 w-4 flex-shrink-0" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--ds-color-text-muted)]">
                <CreditCard className="h-4 w-4 flex-shrink-0" />
                <span>PCI DSS compliant payments</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <CheckoutFlow />,
};

export const WithValidationErrors: Story = {
  render: () => {
    const CheckoutWithErrors = () => {
      const [showErrors, setShowErrors] = useState(false);

      return (
        <div className="max-w-6xl mx-auto space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              This story demonstrates form validation and error states. Click "Show Validation Errors" to see how errors are displayed across all form fields.
            </AlertDescription>
          </Alert>
          <Button onClick={() => setShowErrors(!showErrors)}>
            {showErrors ? 'Hide' : 'Show'} Validation Errors
          </Button>
          {showErrors && <CheckoutFlow />}
        </div>
      );
    };

    return <CheckoutWithErrors />;
  },
};