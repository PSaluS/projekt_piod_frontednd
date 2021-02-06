import './style.scss';
import axios from 'axios';
import Pokemons from './pokemons'

const tabb = document.querySelector("table");
const pokemons = new Pokemons();

document.getElementById('load').onclick = async function() {
try{
const adata = await axios.get('http://localhost:5000/table')
.then(function (adata) {
   pokemons.fill(adata.data);
})
} catch(event) {
        console.error(event);
    }
}