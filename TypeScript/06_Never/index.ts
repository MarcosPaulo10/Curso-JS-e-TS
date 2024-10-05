const error = ():never => {
    throw new Error("Algo deu errado");
};

const loop = (): never => {
    while (true) {
        console.log("Olá");
    }
};

