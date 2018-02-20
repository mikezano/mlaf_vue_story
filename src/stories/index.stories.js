/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import draw_in from './draw_in.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with textt', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello ssButtonnn</my-button>',
    methods: { action: action('clicked') },
  }))
  // .add('with JSX', () => ({
  //   components: { MyButton },
  //   render() {
  //     return <my-button onClick={this.action}>With JSX</my-button>;
  //   },
  //   methods: { action: linkTo('clicked') },
  // }))
  .add('with some emojiss', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😎 👍 💯 💯</my-button>',
    methods: { action: action('clicked') },
  }))

  .add('Hi', () => {
    let word = 'Hel';
    let color = 'yellow';
    return {
      components: { draw_in },
      template: `<draw_in text='Hello' color='green'></draw_in>`
    }
  });

/* eslint-enable react/react-in-jsx-scope */
