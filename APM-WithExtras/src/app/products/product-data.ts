import { Product } from './product';

export class ProductData {

  static products: Product[] = [
    {
      id: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      categoryId: 1,
      quantityInStock: 15,
      supplierIds: [1, 2],
      suppliers: [
        {
          id: 1,
          name: 'Acme Gardening Supply',
          cost: 16.95,
          minQuantity: 12
        },
        {
          id: 2,
          name: 'Standard Gardening',
          cost: 15.95,
          minQuantity: 24
        }
      ]
    },
    {
      id: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      categoryId: 1,
      quantityInStock: 2,
      supplierIds: [3, 4],
      suppliers: [
        {
          id: 3,
          name: 'Acme Gardening Supply',
          cost: 12,
          minQuantity: 6
        },
        {
          id: 4,
          name: 'Acme General Supply',
          cost: 25,
          minQuantity: 2
        }
      ]
    },
    {
      id: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      description: 'Curved claw steel hammer',
      price: 8.9,
      categoryId: 3,
      quantityInStock: 8,
      supplierIds: [5, 6, 10]
    },
    {
      id: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      categoryId: 3,
      quantityInStock: 6,
      supplierIds: [7, 8]
    },
    {
      id: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      price: 35.95,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10]
    }
  ];
}
