import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { ProductCardComponent } from "./product-card.component";
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { CommonModule } from "@angular/common";
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<ProductCardComponent> = {
  title: 'Products/Product Card',
  component: ProductCardComponent,
  tags: ['products', 'product', 'card', 'autodocs'],
  args: {
    product: {
      id: 1,
      image: 'https://picsum.photos/seed/picsum/200/300',
      name: 'Product 1',
      price: 100,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      categories: ["Category 1", "Category 2"]
    }
  },
  decorators: [ // Sin esta propiedad, no se muestra el botón
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator((story) => `<div class="w-25">${story}</div>`) // Añadir esta propiedad para personalizar el tamaño del componente
  ],
};

export default meta;
type Story = StoryObj<ProductCardComponent>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  }
};


