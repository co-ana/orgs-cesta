import banner from '../../assets/topo.png'
import farmLogo from '../../assets/logo.png'

import tomato from '../../assets/frutas/Tomate.png'
import broccoli from '../../assets/frutas/Brocolis.png'
import potato from '../../assets/frutas/Batata.png'
import cucumber from '../../assets/frutas/Pepino.png'
import pumpkin from '../../assets/frutas/Abobora.png'

const basket = {
  header: {
    banner,
    title: 'Detalhes da cesta',
  },
  details: {
    name: 'Cesta de verduras',
    description: 'Description',
    price: 'R$ 40,00',
    farm: {
      name: 'Nome da fazenda',
      logo: farmLogo,
    },
  },
  items: {
    title: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        image: tomato,
      },
      {
        name: 'Brócolis',
        image: broccoli,
      },
      {
        name: 'Batata',
        image: potato,
      },
      {
        name: 'Pepino',
        image: cucumber,
      },
      {
        name: 'Abóbora',
        image: pumpkin,
      },
    ],
  },
}

export default basket
