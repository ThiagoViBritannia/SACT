
var tbRecords = [
    {
        id: 1,
        season: 'Pesquisa e Projeto',
        criterion: 'Fundamentação Teorica',
    },
    {
        id: 2,
        season: 'Pesquisa e Projeto',
        criterion: 'Impacto Social',
    },
    {
        id: 3,
        season: 'Técnica e Prática',
        criterion: 'Domínio de Tecnólogia',
    },
    {
        id: 4,
        season: 'Técnica e Prática',
        criterion: 'Escalabilidade',
    }
]


export function tables() {
    return tbRecords;
}

export function insert(rec) {
    tbRecords = tbRecords.concat(rec);
}


export const header = [
    "Critério",
    "Seção",
]

export const name = "Ficha de Avaliação"

export const types = [
    "criterion", "season", 
]

export const key = "id"