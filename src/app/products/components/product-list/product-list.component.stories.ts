import { Meta, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ProductListComponent } from "./product-list.component";
import productsData from '../../../../assets/data/products.json';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "src/app/shared/components/button/button.component";

const meta: Meta<ProductListComponent> = {
  title: 'Products/Product list',
  component: ProductListComponent,
  tags: ['products', 'product', 'list', 'autodocs'],
  args: {
    products: productsData.products.slice(0, 4),
  },
  decorators: [
    moduleMetadata({
      declarations: [ProductCardComponent, ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = Meta<ProductListComponent>;

export const Default: Story = {};
