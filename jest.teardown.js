module.exports = async function globalTeardown() {
  console.log("Todos os testes terminaram, saindo...");
  process.exit(0);
}