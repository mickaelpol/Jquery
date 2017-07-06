$('#addText' ).text('hello world'); /*ou $('#addText').html('hello world'); */
console.log('hello world');

$('#remove').remove();

$('#changeColor').addClass('backgroundcolor');
//$('.backgroundcolor')


for (var i = 0; i < 4; i++) // défini la boucle jusqu'a 4
{
	$('#addChildren').append('<p>hello </p>'); // selectionne l'id et y ajoute les balise <p></p>
}