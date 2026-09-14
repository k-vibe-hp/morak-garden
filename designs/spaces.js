const gallery=document.querySelector('.morak-space-gallery');
if(gallery){
 const viewer=document.createElement('dialog');
 viewer.className='space-viewer';
 viewer.innerHTML='<button type="button" aria-label="사진 닫기">×</button><figure><img alt=""><figcaption></figcaption></figure>';
 document.body.append(viewer);
 gallery.addEventListener('click',event=>{
  const link=event.target.closest('a');if(!link)return;
  event.preventDefault();const img=link.querySelector('img');
  viewer.querySelector('img').src=link.href;
  viewer.querySelector('img').alt=img.alt;
  viewer.querySelector('figcaption').textContent=img.alt;
  viewer.showModal();
 });
 viewer.querySelector('button').addEventListener('click',()=>viewer.close());
 viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
}
