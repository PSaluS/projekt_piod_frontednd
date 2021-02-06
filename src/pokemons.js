import Chart from 'chart.js';

export default class Pokemons {

    constructor() {
        this.data = new Array();
        this.order = {
            Nr: false,
            Name:  true,
            Type_1: true,
            Type_2: true,
            Total: true,
            Hp: true,
            Attack: true,
            Defense: true,
            Sp_Atk: true,
            Sp_Def: true,
            Speed: true,
            Generation: true,
            Legendary: true
        };
    }

    buildChart() {
        const root = document.getElementById('chart');

        root.innerHTML =
            `<div id="chartInter">
               <button id='typeChart'>Types</button>
               <button id='GenerationChart'>Generations</button>
               <button id='LegendChart'>Legendarys</button>
            </div>
            <canvas id="myChart" width="450" height="550"></canvas>`;
            root.setAttribute("style", "left: 950px;");

        document.getElementById('typeChart').onclick = ()=> this.typeChart();
        document.getElementById('GenerationChart').onclick = ()=> this.generationChart();
        document.getElementById('LegendChart').onclick = ()=> this.legendaryChart() ;

        this.ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = undefined;
    }

    buildTable() {
        const root = document.getElementById('data');

        let newTab= `<table id='table'>
            <tr>
            <td id="Id" >ID</td>
            <td id="Name" >Name</td>
            <td id="Type_1" >Type 1</td>
            <td id="Type_2" >Type 2</td>
            <td id="Total" >Total</td>
            <td id="Hp" >Hp</td>
            <td id="Attak" >Attak</td>
            <td id="Defence" >Defence</td>
            <td id="Sp_Attak" >Sp. Attak</td>
            <td id="Sp_Defence" >Sp. Defence</td>
            <td id="Speed" >Speed</td>
            <td id="Generation" >Generation</td>
            <td id="Legendary" >Legendary</td>
            </tr>`;

            this.data.forEach((element, index)=>{
                newTab += `<tr>
                <td><input id='id_${index}' class='id' name='id' type="number" value='${element.Nr}'></td>
                <td><input id='name_${index}' class='name' name='name' type="text" value='${element.Name}'></td>
                <td><input id='type1_${index}' class='type' name='type1' type="text" value='${element.Type_1}'></td>
                <td><input id='type2_${index}' class='type' name='type2' type="text" value='${element.Type_2}'></td>
                <td><input id='total_${index}' class='total' name='total' type="number" value='${element.Total}'></td>
                <td><input id='hp_${index}' class='hp' name='hp' type="number" value='${element.Hp}'></td>
                <td><input id='attak_${index}' class='attak' name='attak' type="number" value='${element.Attack}'></td>
                <td><input id='defence_${index}' class='defence' name='defence' type="number" value='${element.Defense}'></td>
                <td><input id='sp.attak_${index}' class='sp_attak' name='sp. attak' type="number" value='${element.Sp_Atk}'></td>
                <td><input id='sp.defence_${index}' class='sp_defence' name='sp. defence' type="number" value='${element.Sp_Def}'></td>
                <td><input id='speed_${index}' class='speed' name='speed' type="number" value='${element.Speed}'></td>
                <td><input id='generation_${index}' class='generation' name='generation' type="number" value='${element.Generation}'></td>
                <td><input id='legendary_${index}' class='legendary' name='legendary' type="text" value='${element.Legendary}'></td>
                </tr>`;
            })
            newTab += '</table>';
            root.innerHTML = newTab;

            document.getElementById('Id').onclick = ()=> this.sortNr();
            document.getElementById('Name').onclick = ()=> this.sortName();
            document.getElementById('Type_1').onclick = ()=> this.sortType_1();
            document.getElementById('Type_2').onclick = ()=> this.sortType_2();
            document.getElementById('Total').onclick = ()=> this.sortTotal();
            document.getElementById('Hp').onclick = ()=> this.sortHp();
            document.getElementById('Attak').onclick = ()=> this.sortAttack();
            document.getElementById('Defence').onclick = ()=> this.sortDefence();
            document.getElementById('Sp_Attak').onclick = ()=> this.sortSp_Atk();
            document.getElementById('Sp_Defence').onclick = ()=> this.sortSp_Def();
            document.getElementById('Speed').onclick = ()=> this.sortSpeed();
            document.getElementById('Generation').onclick = ()=> this.sortGeneration();
            document.getElementById('Legendary').onclick = ()=> this.sortLegendary();
    }

    fill (inputData) {


        for (let i=0; i< inputData.Attack.length; i++ ) {
            this.data.push(
                {
                    Nr: inputData.Nr[i] ,
                    Name: inputData.Name[i] ,
                    Type_1: inputData.Type_1[i] ,
                    Type_2: inputData.Type_2[i] ,
                    Total: inputData.Total[i] ,
                    Hp: inputData.Hp[i] ,
                    Attack: inputData.Attack[i] ,
                    Defense: inputData.Defense[i] ,
                    Sp_Atk: inputData.Sp_Atk[i] ,
                    Sp_Def: inputData.Sp_Def[i] ,
                    Speed: inputData.Speed[i] ,
                    Generation: inputData.Generation[i] ,
                    Legendary: inputData.Legendary[i]
                }
            )
        }
        this.buildTable();
        this.buildChart();
    }

    typeChart() {
        if(this.myChart != undefined) {
            this.myChart.destroy();
        }

        this.myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
                labels: ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground',
                        'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'],
                datasets: [{
                    data: [
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Bug').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Dark').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Dragon').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Electric').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Fairy').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Fighting').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Fire').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Flying').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Ghost').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Grass').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Ground').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Ice').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Normal').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Poison').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Psychic').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Rock').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Steel').length,
                        this.data.filter((pokemon)=> pokemon.Type_1 == 'Water').length
                    ],
                    backgroundColor: [
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 24,
                    fontColor: '#000',
                    text: 'Types Chart'
                }
            }
        });
    }

    generationChart() {
        if(this.myChart != undefined) {
            this.myChart.destroy();
        }

        this.myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
                labels: [1,2,3,4,5,6],
                datasets: [{
                    data: [
                        this.data.filter((pokemon)=> pokemon.Generation == 1).length,
                        this.data.filter((pokemon)=> pokemon.Generation == 2).length,
                        this.data.filter((pokemon)=> pokemon.Generation == 3).length,
                        this.data.filter((pokemon)=> pokemon.Generation == 4).length,
                        this.data.filter((pokemon)=> pokemon.Generation == 5).length,
                        this.data.filter((pokemon)=> pokemon.Generation == 6).length
                    ],
                    backgroundColor: [
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 24,
                    fontColor: '#000',
                    text: 'Generation Chart'
                }
            }
        });
    }

    legendaryChart() {
        if(this.myChart != undefined) {
            this.myChart.destroy();
        }

        this.myChart = new Chart(this.ctx, {
            type: 'pie',
            data: {
                labels: ['Normal', 'Legendary'],
                datasets: [{
                    data: [
                        this.data.filter((pokemon)=> pokemon.Legendary == false).length,
                        this.data.filter((pokemon)=> pokemon.Legendary == true).length
                    ],
                    backgroundColor: [
                        `${this.random_rgba()}`,
                        `${this.random_rgba()}`
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    position: 'top',
                    fontSize: 24,
                    fontColor: '#000',
                    text: 'Legendary Chart'
                }
            }
        });
    }

    random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    sortName() {
        if(this.order.Name == true)
        {
            this.data.sort((a,b)=>{
                if (a.Name < b.Name) {
                    return -1;
                  }
                if (a.Name > b.Name) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Name < b.Name) {
                    return 1;
                  }
                if (a.Name > b.Name) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Name = !this.order.Name;
        this.buildTable();
    }
    sortNr() {
        if(this.order.Nr == true)
        {
            this.data.sort((a,b)=>{
                if (a.Nr < b.Nr) {
                    return -1;
                  }
                if (a.Nr > b.Nr) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Nr < b.Nr) {
                    return 1;
                  }
                if (a.Nr > b.Nr) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Nr = !this.order.Nr;
        this.buildTable();
    }
    sortType_1() {
        if(this.order.Type_1 == true)
        {
            this.data.sort((a,b)=>{
                if (a.Type_1 < b.Type_1) {
                    return -1;
                  }
                if (a.Type_1 > b.Type_1) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Type_1 < b.Type_1) {
                    return 1;
                  }
                if (a.Type_1 > b.Type_1) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Type_1 = !this.order.Type_1;
        this.buildTable();
    }
    sortType_2() {
        if(this.order.Type_2 == true)
        {
            this.data.sort((a,b)=>{
                if (a.Type_2 < b.Type_2) {
                    return -1;
                  }
                if (a.Type_2 > b.Type_2) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Type_2 < b.Type_2) {
                    return 1;
                  }
                if (a.Type_2 > b.Type_2) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Type_2 = !this.order.Type_2;
        this.buildTable();
    }
    sortTotal() {
        if(this.order.Total == true)
        {
            this.data.sort((a,b)=>{
                if (a.Total < b.Total) {
                    return -1;
                  }
                if (a.Total > b.Total) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Total < b.Total) {
                    return 1;
                  }
                if (a.Total > b.Total) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Total = !this.order.Total;
        this.buildTable();
    }
    sortHp() {
        if(this.order.Hp == true)
        {
            this.data.sort((a,b)=>{
                if (a.Hp < b.Hp) {
                    return -1;
                  }
                if (a.Hp > b.Hp) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Hp < b.Hp) {
                    return 1;
                  }
                if (a.Hp > b.Hp) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Hp = !this.order.Hp;
        this.buildTable();
    }
    sortAttack() {
        if(this.order.Attck == true)
        {
            this.data.sort((a,b)=>{
                if (a.Attack < b.Attack) {
                    return -1;
                  }
                if (a.Attack > b.Attack) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Attack < b.Attack) {
                    return 1;
                  }
                if (a.Attack > b.Attack) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Attack = !this.order.Attack;
        this.buildTable();
    }
    sortDefence() {
        if(this.order.Defence == true)
        {
            this.data.sort((a,b)=>{
                if (a.Defence < b.Defence) {
                    return -1;
                  }
                if (a.Defence > b.Defence) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Defence < b.Defence) {
                    return 1;
                  }
                if (a.Defence > b.Defence) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Defence = !this.order.Defence;
        this.buildTable();
    }
    sortSp_Atk() {
        if(this.order.Sp_Atk == true)
        {
            this.data.sort((a,b)=>{
                if (a.Sp_Atk < b.Sp_Atk) {
                    return -1;
                  }
                if (a.Sp_Atk > b.Sp_Atk) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Sp_Atk < b.Sp_Atk) {
                    return 1;
                  }
                if (a.Sp_Atk > b.Sp_Atk) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Sp_Atk = !this.order.Sp_Atk;
        this.buildTable();
    }
    sortSp_Def() {
        if(this.order.Sp_Def == true)
        {
            this.data.sort((a,b)=>{
                if (a.Sp_Def < b.Sp_Def) {
                    return -1;
                  }
                if (a.Sp_Def > b.Sp_Def) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Sp_Def < b.Sp_Def) {
                    return 1;
                  }
                if (a.Sp_Def > b.Sp_Def) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Sp_Def = !this.order.Sp_Def;
        this.buildTable();
    }
    sortSpeed() {
        if(this.order.Speed == true)
        {
            this.data.sort((a,b)=>{
                if (a.Speed < b.Speed) {
                    return -1;
                  }
                if (a.Speed > b.Speed) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Speed < b.Speed) {
                    return 1;
                  }
                if (a.Speed > b.Speed) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Speed = !this.order.Speed;
        this.buildTable();
    }
    sortGeneration() {
        if(this.order.Generation == true)
        {
            this.data.sort((a,b)=>{
                if (a.Generation < b.Generation) {
                    return -1;
                  }
                if (a.Generation > b.Generation) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Generation < b.Generation) {
                    return 1;
                  }
                if (a.Generation > b.Generation) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Generation = !this.order.Generation;
        this.buildTable();
    }
    sortLegendary() {
        if(this.order.Legendary == true)
        {
            this.data.sort((a,b)=>{
                if (a.Legendary < b.Legendary) {
                    return -1;
                  }
                if (a.Legendary > b.Legendary) {
                    return 1;
                  }
                return 0;
            });
        } else {
            this.data.sort((a,b)=>{
                if (a.Legendary < b.Legendary) {
                    return 1;
                  }
                if (a.Legendary > b.Legendary) {
                    return -1;
                  }
                return 0;
            });
        }
        this.order.Legendary = !this.order.Legendary;
        this.buildTable();
    }
}