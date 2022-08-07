const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

//teste para passar
it('Testa a função uppercase:', (done) => {
    uppercase('teste', (strUpperCase) => {
        try {
            expect(strUpperCase).toBe('TESTE');
            done();
        } catch (error) {
            done(error);
        }
    })
});

//teste para dar erro
it('Testa a função uppercase:', (done) => {
    uppercase('teste', (strUpperCase) => {
        try {
            expect(strUpperCase).toBe('TESTe');
            done();
        } catch (error) {
            done(error);
        }
    })
});