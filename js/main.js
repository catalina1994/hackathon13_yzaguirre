const c = console.log
//modal


//pintar elementos
const listDogs = document.getElementById('listDogs'),
      modal = document.getElementById('modalEliminar'),
      btnAgregarDog = document.getElementById('btnAgregarDog'),
      modalFormAdd = document.getElementById('modalFormAdd')
      

 async function getInfoDog(){
    try{ //correcto
       const Dogs = await fetch('../data-perritos.json'),
             InfoDogs = await Dogs.json();
        let template =''
       InfoDogs.forEach(InfoDog =>{
            template+=`
            <article class="card">
                    <div class="card__img">
                        <img  src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg" alt="">
                    </div>
                    <div class="card__caption">
                        <h3 class="card__title">
                            ${InfoDog.name}
                        </h3>
                    <ul class="card__list">
                        <li><strong>Raza: </strong><span>${InfoDog.raza}</span></li>
                        <li><strong>Edad: </strong><span>${InfoDog.edad} años</span></li>
                        <li><strong>Peso: </strong><span>${InfoDog.peso} kg</span></li>
                        <li><strong>Color: </strong><span>${InfoDog.color}</span></li>
                        <li><strong>Descripcion: </strong><span> ${InfoDog.descricion}</span></li>
                    </ul>
                    <div class="card__action">
                        <button class="btn delete">Eliminar</button>
                        <button class="btn btn-line">Editar</button>

                    </div>
                    </div>
                </article>
                 `
       })
       listDogs.innerHTML = template

       //eliminar 
       listDogs.addEventListener('click',obtenerDog)

       function obtenerDog(e){
            e.preventDefault()
           if(e.target.classList.contains(`delete`)){
               const dog = e.target.parentElement.parentElement.parentElement
                modal.classList.add('modal--show')
                modal.addEventListener('click', (e)=>{
                    e.preventDefault()
                    if(e.target.classList.contains('borrar')){
                        eliminarDog(dog)
                    }
                    if(e.target.classList.contains('btn-line')){
                        modal.classList.remove('modal--show')
                    }
                    
                })
           }  
       }

       function eliminarDog(dog){
           dog.remove()
           modal.classList.remove('modal--show')
       }
       //agregar
       btnAgregarDog.addEventListener('click',agregarDog)

       class newDog {
           constructor(nombre, raza, edad , peso, color, description){
            this.nombre = nombre,
            this.raza = raza,
            this.edad = edad,
            this.peso = peso,
            this.color = color,
            this.description = description
           }
           
       }

       function agregarDog(e){
        e.preventDefault()
        modalFormAdd.classList.add('modal--show')
        modalFormAdd.addEventListener('submit',e =>{
            e.preventDefault()
            let nombre = e.target.nombre.value,
                raza = e.target.raza.value,
                edad = e.target.edad.value,
                peso = e.target.peso.value,
                color = e.target.color.value,
                description = e.target.description.value

            let dogNew = new newDog(nombre,raza,edad,peso,color,description)
            modalFormAdd.classList.remove('modal--show')
            pintarNewDog(dogNew)
        })
        
   }
   function pintarNewDog(dogNew) {
       let cardNewDog = document.createElement('article')
       cardNewDog.classList.add('card')
       cardNewDog.innerHTML =`
         <div class="card__img">
             <img  src="https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg" alt="">
         </div>
        <div class="card__caption">
            <h3 class="card__title">
                ${dogNew.nombre}
            </h3>
            <ul class="card__list">
                        <li><strong>Raza: </strong><span>${dogNew.raza}</span></li>
                        <li><strong>Edad: </strong><span>${dogNew.edad} años</span></li>
                        <li><strong>Peso: </strong><span>${dogNew.peso} kg</span></li>
                        <li><strong>Color: </strong><span>${dogNew.color}</span></li>
                        <li><strong>Descripcion: </strong><span> ${dogNew.description}</span></li>
            </ul>
            <div class="card__action">
             <button class="btn delete">Eliminar</button>
             <button class="btn btn-line">Editar</button>
            </div>
            </div>
       `
       listDogs.appendChild(cardNewDog)

   }

    } catch(error){
        console.log(error)
    }
}
getInfoDog();