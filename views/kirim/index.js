<html>
<head>


<% include ../partials/header.ejs %>

</head>
<body>

<% include ../partials/nav.ejs %>

<input id='wif' type='text' placeholder="WIF"></input>
<input id='from' type='text' placeholder="From"></input>
<input id='to' type='text' placeholder="To"></input>
<input id='amount' type='text' placeholder="amount"></input>
<input id='memo' type='text' placeholder="Memo"></input>

<input type="button" value="Transfer" id='button' onclick='transfer()'  />

<script>
function transfer(){
const wif= document.getElementById('wif').value;
const from= (document.getElementById('from').value;
const to= document.getElementById('to').value;
conts amount = document.getElementById('amount').value;
conts memo= document.getElementById('memo').value;

steem.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
 console.log(err, result);
});
}
</script>
</body>
</html>
