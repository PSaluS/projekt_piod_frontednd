import './style.scss';
import axios from 'axios';
import Pokemons from './pokemons';
import Times from './times.js';

const tabb = document.querySelector("table");

let datas = undefined;

document.getElementById('loadP').onclick = async function() {
try{
    datas = new Pokemons();
    const adata = await axios.get('http://localhost:5000/table')
    .then(function (adata) {
        datas.fill(adata.data);
})
} catch(event) {
    console.error(event);
    }
}

document.getElementById('loadT').onclick = async function() {
try{
    datas = new Times();
    const adata = await axios.get('http://localhost:5000/timeseries')
    .then(function (adata) {
    //    console.log(adata.data);
    datas.fill(adata.data);
})
} catch(event) {
            console.error(event);
        }
    }
