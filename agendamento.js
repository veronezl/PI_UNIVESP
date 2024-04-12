// agendamento.js
document.addEventListener('DOMContentLoaded', function() {
    const selectHorario = document.getElementById('horario');
    for (let hora = 7; hora <= 17; hora++) {
        let option = document.createElement('option');
        option.value = `${hora}:00`;
        option.textContent = `${hora}:00 - ${hora + 1}:00`;
        selectHorario.appendChild(option);
    }
});
