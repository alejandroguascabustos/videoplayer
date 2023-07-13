        
        
/* Se crea una variable y luego se toma la clase # del elemento que se quiere usar */        
        const $video = document.querySelector('#video') 
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')

/* Se crear un evento para el elemento seleccionado, es decir que al dar clic en cierto objeto se realiza una funcion*/
        $play.addEventListener('click',handlePlay) 
        $pause.addEventListener('click',handlePause)

/* Se realiza una funcion que se puede ver en consola, reproducir*/
        function handlePlay() { 
            $video.play()
            $play.hidden = true /*Switch para que al reproducir el video se oculte el boton de pausa*/
            $pause.hidden = false
            console.log('Le diste click al botón de play')
        }

        function handlePause() { /* Se realiza una funcion que se puede ver en consola, pausar*/
            
            $video.pause()
            $pause.hidden = true /*Switch para que al pausar el video se oculte el boton de play*/
            $play.hidden = false
            console.log('Le diste click al botón de pausa')
        }

        $backward.addEventListener('click',handleBackward)

      function handleBackward() {
        $video.currentTime = $video.currentTime - 10
        console.log('para atras 10 segundos', $video.currentTime )

      }

      $forward.addEventListener('click',handleForward)

      function handleForward() {
        $video.currentTime = $video.currentTime + 10
        console.log('para adelante 10 segundos',$video.currentTime)

      }

      const $progress = document.querySelector('#progress')
      $video.addEventListener('loadedmetadata',handleLoaded)
      $video.addEventListener('timeupdate',handleTimeUpdate)


      function handleLoaded (){
        $progress.max = video.duration
        console.log('ha cargado mi video', $video.duration)
      }

      function handleTimeUpdate(){
        $progress.value = $video.currentTime
        // console.log('Tiempo actual',$video.currentTime )
      }

      $progress.addEventListener('input', handleInput)

      function handleInput(){
        $video.currentTime = $progress.value
        console.log($progress.value)
      }