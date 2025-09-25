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
} from '../../src/components';
import { ShoppingCart, CreditCard, Lock, Truck, Package, Plus, Minus, X } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Checkout Process',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete e-commerce checkout flow showcasing cart management, payment processing, and order confirmation.',
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
  const [savePayment, setSavePayment] = useState(false);

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
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
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={billingInfo.cardNumber}
                    onChange={(e) => setBillingInfo({ ...billingInfo, cardNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardHolder">Cardholder Name</Label>
                  <Input
                    id="cardHolder"
                    placeholder="John Doe"
                    value={billingInfo.cardHolder}
                    onChange={(e) => setBillingInfo({ ...billingInfo, cardHolder: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={billingInfo.expiryDate}
                      onChange={(e) => setBillingInfo({ ...billingInfo, expiryDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={billingInfo.cvv}
                      onChange={(e) => setBillingInfo({ ...billingInfo, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Billing Address</h4>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    value={billingInfo.billingAddress}
                    onChange={(e) => setBillingInfo({ ...billingInfo, billingAddress: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Philadelphia"
                      value={billingInfo.city}
                      onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={billingInfo.state} onValueChange={(value) => setBillingInfo({ ...billingInfo, state: value })}>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PA">PA</SelectItem>
                        <SelectItem value="NJ">NJ</SelectItem>
                        <SelectItem value="NY">NY</SelectItem>
                        <SelectItem value="DE">DE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP</Label>
                    <Input
                      id="zip"
                      placeholder="19101"
                      value={billingInfo.zipCode}
                      onChange={(e) => setBillingInfo({ ...billingInfo, zipCode: e.target.value })}
                    />
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

          {/* Shipping Method */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <CardTitle>Installation & Setup</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
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
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation</span>
                  <span>${shippingCost.toFixed(2)}</span>
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
            <CardFooter className="flex flex-col gap-2">
              <Button variant="primary" className="w-full" size="lg">
                Complete Order
                <Lock className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center text-[var(--ds-color-text-muted)]">
                By placing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-sm text-[var(--ds-color-text-muted)]">
                <Lock className="h-4 w-4" />
                <span>Your payment information is secure and encrypted</span>
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