const alunos = [{ nome: "Hariel", nota: 6, turma: "18" },
    { nome: "Harianne", nota: 8, turma: "34" },
    { nome: "Stephany", nota: 3, turma: "5" },
    { nome: "Pedro", nota: 0, turma: "8" }
]


function alunosAprovados(arr, media = 6) {
    let aprovados = []
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i] // requisitando apenas as proriedads do objeto do indice em questão
        if (nota >= media) {
            //como ja esta especificado, só coloca o que deve ser 
            aprovaod.push(nome);
        }
    }
    return aprovados
}