function show(n){
  document.querySelectorAll('.content p').forEach(p=>{
    p.style.display = 'none';
  });
  document.getElementById('c' + n).style.display = 'block';
}

show(1);
