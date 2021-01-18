import './style.scss';
import axios from 'axios';

const tabb = document.querySelector("table");
const axiosConfig = {
    headers: {'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET'+ 'POST'+ 'PUT',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'},
    withCredentials: true,
    
}

document.getElementById('load').onclick = async function() {
//     try{
//     const data = await axios({
//   method: 'get',
//   url: 'http://localhost:5000/table',
//     })
//     console.log(data);
// } catch {
//     console.error('Brak odpowiedzi z API.');
// }
try{
const adata = await axios.get('http://localhost:5000/table')
.then(function (adata) {
  // handle success
//   console.log(adata.data);
  const {Nr,Name,Type_1,Type_2,Total,HP,Attack,Defense,Sp_Atk,Sp_Def,Speed,Generation,Legendary} = adata.data;
// const data = adata.data;
    // Nr.length
    let newTab= `<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Type 1</td>
    <td>Type 2</td>
    <td>Total</td>
    <td>Hp</td>
    <td>Attak</td>
    <td>Defence</td>
    <td>Sp. Attak</td>
    <td>Sp. Defence</td>
    <td>Speed</td>
    <td>Generation</td>
    <td>Legendary</td>
</tr>`;
    for(let i=0;i<Nr.length;i++) {
        newTab += `<tr>
        <td><input id='id_${i}' class='id' name='id' type="number" value='${Nr[i]}'></td>
        <td><input id='name_${i}' class='name' name='name' type="text" value='${Name[i]}'></td>
        <td><input id='type1_${i}' class='type' name='type1' type="text" value='${Type_1[i]}'></td>
        <td><input id='type2_${i}' class='type' name='type2' type="text" value='${Type_2[i]}'></td>
        <td><input id='total_${i}' class='total' name='total' type="number" value='${Total[i]}'></td>
        <td><input id='hp_${i}' class='hp' name='hp' type="number" value='${HP[i]}'></td>
        <td><input id='attak_${i}' class='attak' name='attak' type="number" value='${Attack[i]}'></td>
        <td><input id='defence_${i}' class='defence' name='defence' type="number" value='${Defense[i]}'></td>
        <td><input id='sp.attak_${i}' class='sp_attak' name='sp. attak' type="number" value='${Sp_Atk[i]}'></td>
        <td><input id='sp.defence_${i}' class='sp_defence' name='sp. defence' type="number" value='${Sp_Def[i]}'></td>
        <td><input id='speed_${i}' class='speed' name='speed' type="number" value='${Speed[i]}'></td>
        <td><input id='generation_${i}' class='generation' name='generation' type="number" value='${Generation[i]}'></td>
        <td><input id='legendary_${i}' class='legendary' name='legendary' type="text" value='${Legendary[i]}'></td>
    </tr>`;
    }
    tabb.innerHTML = newTab;
   

})
} catch {
        console.error('Brak odpowiedzi z API.');
    }

// .catch(function (error) {
//     console.log(error);
//     console.log('NOPE, not this time Bro :/');
//   })
}