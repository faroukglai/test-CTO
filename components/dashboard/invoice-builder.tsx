"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Plus, Trash2, Eye } from "lucide-react";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export function InvoiceBuilder() {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", description: "", quantity: 1, unitPrice: 0 },
  ]);

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now().toString(),
        description: "",
        quantity: 1,
        unitPrice: 0,
      },
    ]);
  };

  const removeLineItem = (id: string) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return lineItems.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Builder */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
            Invoice Details
          </h2>

          <form className="space-y-6">
            {/* Invoice Number and Dates */}
            <div className="grid grid-cols-3 gap-4">
              <FormItem>
                <FormLabel>Invoice Number</FormLabel>
                <Input placeholder="INV-001" />
              </FormItem>
              <FormItem>
                <FormLabel>Issue Date</FormLabel>
                <Input type="date" />
              </FormItem>
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <Input type="date" />
              </FormItem>
            </div>

            {/* From */}
            <div>
              <h3 className="font-medium mb-3 text-gray-900 dark:text-white">
                From
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your Company Name" />
                </FormItem>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="billing@company.com" type="email" />
                </FormItem>
              </div>
            </div>

            {/* To */}
            <div>
              <h3 className="font-medium mb-3 text-gray-900 dark:text-white">
                Bill To
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel>Customer Name</FormLabel>
                  <Input placeholder="Customer Name" />
                </FormItem>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="customer@company.com" type="email" />
                </FormItem>
              </div>
            </div>

            {/* Line Items */}
            <div>
              <h3 className="font-medium mb-3 text-gray-900 dark:text-white">
                Line Items
              </h3>
              <div className="space-y-3">
                {lineItems.map((item) => (
                  <div key={item.id} className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Input placeholder="Description" />
                    </div>
                    <div className="w-20">
                      <Input placeholder="Qty" type="number" />
                    </div>
                    <div className="w-24">
                      <Input placeholder="Price" type="number" />
                    </div>
                    <div className="w-24 text-right">
                      <span className="text-sm font-medium">$0.00</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeLineItem(item.id)}
                      type="button"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-3 gap-2"
                onClick={addLineItem}
                type="button"
              >
                <Plus className="h-4 w-4" />
                Add Line Item
              </Button>
            </div>

            {/* Notes */}
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <Textarea placeholder="Add any additional notes or payment instructions..." />
            </FormItem>
          </form>
        </Card>
      </div>

      {/* Preview */}
      <div>
        <Card className="border border-gray-200 dark:border-gray-800 p-6 sticky top-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Preview
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-medium text-gray-900 dark:text-white">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Tax (0%)</span>
              <span className="font-medium text-gray-900 dark:text-white">
                $0.00
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-lg font-bold text-blue-600">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button className="w-full">Save & Send</Button>
            <Button variant="outline" className="w-full gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
