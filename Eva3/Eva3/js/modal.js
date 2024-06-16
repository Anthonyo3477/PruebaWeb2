document.addEventListener('DOMContentLoaded', () => {
    const formEliminar = document.getElementById('formEliminar');
    const formModificar = document.getElementById('formModificar');
    const formCrear = document.getElementById('formCrear');

    formEliminar.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('eliminarId').value;
        try {
            await fetch(`/api/motos/${id}`, {
                method: 'DELETE',
            });
            alert('Moto eliminada exitosamente');
            location.reload(); // Recargar la página para reflejar los cambios
        } catch (error) {
            alert('Error al eliminar la moto');
        }
    });

    formModificar.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(formModificar);
        const id = data.get('modificarId');
        const moto = {};
        data.forEach((value, key) => {
            if (key !== 'modificarId') moto[key] = value;
        });
        try {
            await fetch(`/api/motos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(moto),
            });
            alert('Moto modificada exitosamente');
            location.reload(); // Recargar la página para reflejar los cambios
        } catch (error) {
            alert('Error al modificar la moto');
        }
    });

    formCrear.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(formCrear);
        const moto = {};
        data.forEach((value, key) => {
            moto[key] = value;
        });
        try {
            await fetch('/api/motos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(moto),
            });
            alert('Moto creada exitosamente');
            location.reload(); // Recargar la página para reflejar los cambios
        } catch (error) {
            alert('Error al crear la moto');
        }
    });
});
