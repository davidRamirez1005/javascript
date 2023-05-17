class Modal extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos para la ventana modal */
          .modal {
              display: none; /* Oculta la ventana modal por defecto */
              position: fixed; /* Permite que la ventana modal aparezca por encima del contenido */
              z-index: 1; /* Asegura que la ventana modal se muestre por encima de todo el contenido */
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto; /* Permite el desplazamiento del contenido dentro de la ventana modal */
              background-color: rgba(0,0,0,0.4); /* Fondo oscurecido */
            }
            
            /* Estilos para el contenido de la ventana modal */
            .modal-content {
              background-color: #fefefe;
              margin: 15% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 80%;
            }
            
            /* Estilos para el botón "Cerrar" */
            .close {
              color: #aaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
            }
            
            .close:hover,
            .close:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
            }
          button{
            border: none;
            border-radius: 40px;
            padding: 10px;
            background: linear-gradient(to right, #5fff50, #0f8dd7, #00bfff, #00d32d);
            color: rgb(39, 31, 31);
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            background-size: 300% 100%;
            font-size: 17px;
            font-weight: 800;

          }
          button:hover {
            transition:background-position 3s;
            background-position: 100% 0;
        }
        </style>
  
        <button id="open-button">Agendar</button>
  
        <!-- Ventana modal -->
        <div id="modal" class="modal">
  
          <!-- Contenido de la ventana modal -->
          <div class="modal-content">
            <span class="close" id="close-button">&times;</span>
            <h2>Información</h2>
            <form>
              <label for="archivos">Archivos:</label>
              <input type="file" id="archivo" name="archivo"><br><br>
  
              <label for="imagen">Imagen:</label>
              <input type="file" id="imagen" name="imagen"><br><br>
  
              <label for="fecha">Fecha:</label>
              <input type="date" id="fecha" name="fecha"><br><br>
  
              <label for="texto">Texto:</label>
              <textarea id="texto" name="texto"></textarea><br><br>
  
              <input type="submit" value="agregar">
            </form>
          </div>
  
        </div>
      `;
  
      // Crear una sombra DOM
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Obtener los elementos del DOM
      const openButton = shadowRoot.querySelector('#open-button');
      const closeButton = shadowRoot.querySelector('#close-button');
      const modal = shadowRoot.querySelector('#modal');
  
      // Agregar los eventos
      openButton.addEventListener('click', () => {
        modal.style.display = 'block';
      });
  
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }
  
  // Definir el nuevo elemento web 'modal-window'
  customElements.define('modal-window', Modal);
  