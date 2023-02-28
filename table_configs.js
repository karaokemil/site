$(document).ready(function() {
    $('#demo').DataTable( {
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "Não há correspondências para o filtro aplicado",
            "info": "Mostrando músicas _START_ a _END_ de um total de _TOTAL_",
            "infoEmpty": "Não há correspondências para o filtro aplicado",
            "infoFiltered": "(Filtrado de um total de _MAX_ músicas)",
            "search": "Pesquisar:",
            "paginate": {
                "previous": "Anterior",
                "next": "Próxima"
            }
        }
    } );
} );