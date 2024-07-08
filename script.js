

function verifyPassword(teste) {
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  const requirements = [
    { regex: /.{6,}/, message: "No mínimo 6 caracteres" },
    { regex: /[A-Z]/, message: "No mínimo 1 letra maiúscula" },
    { regex: /[a-z]/, message: "No mínimo 1 letra minúscula" },
    { regex: /[0-9]/, message: "No mínimo 1 número" },
    { regex: /[^A-Za-z0-9]/, message: "No mínimo 1 caractere especial" }
  ];

  const failedRequirements = requirements.filter(req => !req.regex.test(password));

  if (failedRequirements.length === 0) {
    message.innerHTML = '<div class="alert alert-success" role="alert">Senha válida!</div>';
  } else {
    message.innerHTML = '<div class="alert alert-danger" role="alert">' +
      'A senha deve conter:<br>' +
      failedRequirements.map(req => req.message).join('<br>') +
      '</div>';
  }
}