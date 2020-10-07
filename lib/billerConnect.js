//var request = require('request');

const Biller =  (...args) => {
    let token_;

    console.log("--- Biller");
    if(!args[0]) console.error("Token undefined.");
    else if(typeof(args[0]) !== 'string') console.error("Token incorrecto, debe de ser String.");
    else token_ = args[0];

    Biller.getToken = ()=>{
        return token_;
    };

    // from Biller.uy
    Biller.getComprobante = (...args)=>{};
    Biller.createComprobante = (...args)=>{};

    // Internal
    Biller.getComprobantes = (...args)=>{};

    return Biller;
};

const billerConnect  = (token)=>{
    return(Biller(token));
};

module.exports = exports = billerConnect;

