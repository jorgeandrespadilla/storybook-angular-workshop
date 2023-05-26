// Vamos a escribir una historia para nuestro componente ButtonComponent

import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// Las historias tienen siempre un export por defecto con un objeto
// el cual va a definir la configuración de nuestra historia.
const meta: Meta<ButtonComponent> = {
  title: 'Shared/Button', // La ruta donde se va a mostrar nuestra historia (en el sidebar de Storybook)
  component: ButtonComponent,
  tags: ['shared', 'button', 'autodocs'],
  args: { // Aquí definimos los valores por defecto de los inputs de nuestro componente
    label: 'Button'
  },
  argTypes: { // Aquí definimos los tipos de inputs para las propiedades de nuestro componente
  },
  parameters: { // Los parámetros nos permiten definir configuraciones adicionales para nuestra historia (para controlar las funcionalidades de Storybook o de los addons)
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [] // Los decoradores nos permiten definir funciones que se ejecutan antes y después de renderizar nuestra historia
};
export default meta;

type Story = StoryObj<ButtonComponent>; // Definimos el tipo que vamos a usar para escribir nuestras historias

// Las historias nos permiten definir diferentes estados de nuestro componente (cómo se ve, cómo se comporta, etc)
export const Primary: Story = {
  args: {
    label: 'Primary',
    primary: true
  }
};
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    primary: false
  }
};
