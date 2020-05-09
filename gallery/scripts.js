

$(document).ready(function() {
    var currentPhoto = 0;

    let imagesData = [
    {
        photo: 'img/DSC_0004.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },
    {
        photo: 'img/DSC_0012.jpg',
        title: 'Picture about something beautiful',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    }, 
    
    {
        photo: 'img/DSC_0014.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },
        {
        photo: 'img/DSC_0032.jpg',
        title: 'Picture about something beautiful',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    }, 
    {
        photo: 'img/DSC_0259.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },
    {
        photo: 'img/DSC_0329-2.jpg',
        title: 'Picture about something beautiful',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },  
    
    {
        photo: 'img/DSC_0386-2.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },
    {
        photo: 'img/DSC_0473.jpg',
        title: 'Picture about something beautiful',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },  
    {
        photo: 'img/DSC_0569-2.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },
    {
        photo: 'img/DSC_0815-2.jpg',
        title: 'Picture about something beautiful',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    },  
    
        {
        photo: 'img/DSC_0828-2.jpg',
        title: 'Sanded Shore somewhere in Denmark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat.'
    }];
     
       let min = 0;
    let max = imagesData.length;
    




    let loadPhoto = (currentPhoto) => {
        console.log(currentPhoto);
        // limitNumberWithinRange(currentPhoto, min, max)
        $('#photo').attr('src', imagesData[currentPhoto].photo);
        $('#photo-title').html(imagesData[currentPhoto].title);
        $('#photo-description').html(imagesData[currentPhoto].description);
      }
      
    $('#arrow_left').click(() => {
        if(currentPhoto > 0) {
            currentPhoto = currentPhoto - 1;  
          }
        loadPhoto(currentPhoto);
        thumbs();
      })

    $('#arrow_right').click(() => {
        if(currentPhoto < max-1) { 
            currentPhoto = currentPhoto + 1;  
          }
        loadPhoto(currentPhoto);
        thumbs();

      });

      let data = ["first", "second", "third", "forth", "fifth"];

      let thumbs =() => {
           data.forEach((item, index) => {
        $('#thumbnails').append(`<img class="smallpicture" id="${item}" style="display:none" data-index="${index -2}">`);
        $('#thumbnails').append(`<div class="box ${item}" ></div>`);

        if (currentPhoto === 0) {
        $('#'+item).css({ 'position':'relative',
        'left': '280px', });
        $('#first').hide();    
        $('#second').hide();  
        $('#'+item).attr('src', imagesData[currentPhoto].photo);
        $('#third').show('slow');
        $('#forth').attr('src', imagesData[currentPhoto +1].photo);
        $('#forth').show('slow');
        $('#fifth').attr('src', imagesData[currentPhoto +2].photo);
        $('#fifth').show('slow');

        $('.box.third').html(imagesData[currentPhoto].title);
        $('.box.forth').html(imagesData[currentPhoto + 1].title);  
        $('.box.fifth').html(imagesData[currentPhoto + 2].title);  
        }

        else if (currentPhoto === 1) {
        $('#'+item).css({ 'position':'relative',
            'left': '140px', });
        $('#first').hide();     
       $('#second').attr('src', imagesData[currentPhoto - 1].photo);
       $('#second').show('slow');
       $('#third').attr('src', imagesData[currentPhoto].photo);
       $('#forth').attr('src', imagesData[currentPhoto + 1].photo);
       $('#fifth').attr('src', imagesData[currentPhoto + 2].photo);


            // $('.box.first').html(imagesData[currentPhoto].title);
       $('.box.second').html(imagesData[currentPhoto - 1].title);
       $('.box.third').html(imagesData[currentPhoto].title);
       $('.box.forth').html(imagesData[currentPhoto + 1].title);  
       $('.box.fifth').html(imagesData[currentPhoto + 2].title);  
       }
       
        else if (currentPhoto === (imagesData.length-2)) {
        $('#first').attr('src', imagesData[currentPhoto - 2].photo);
        $('#second').attr('src', imagesData[currentPhoto - 1].photo);
        $('#third').attr('src', imagesData[currentPhoto].photo);
        $('#forth').attr('src', imagesData[currentPhoto + 1].photo);
        $('#forth').show('fast');
        $('#fifth').hide();
        
        $('.box.first').html(imagesData[currentPhoto - 2].title);
        $('.box.second').html(imagesData[currentPhoto - 1].title);
        $('.box.third').html(imagesData[currentPhoto].title);
        $('.box.forth').html(imagesData[currentPhoto + 1].title);  
        //    $('.box.fifth').html(imagesData[currentPhoto + 2].title);  
        }
        else if (currentPhoto === (imagesData.length-1)) {
        $('#first').attr('src', imagesData[currentPhoto - 2].photo);
        $('#second').attr('src', imagesData[currentPhoto - 1].photo);
        $('#third').attr('src', imagesData[currentPhoto].photo);
        $('#forth').hide();
        $('#fifth').hide();
        // $('#forth').attr('src', imagesData[currentPhoto + 1].photo);
        //    $('#fifth').attr('src', imagesData[currentPhoto + 2].photo);

        $('.box.first').html(imagesData[currentPhoto - 2].title);
        $('.box.second').html(imagesData[currentPhoto - 1].title);
        $('.box.third').html(imagesData[currentPhoto].title);
        // $('.box.forth').html(imagesData[currentPhoto + 1].title);  
        //    $('.box.fifth').html(imagesData[currentPhoto + 2].title);  
        }
        else {
            $('#'+item).css({ 'position':'relative',
            'left': '0px', });
        $('#first').attr('src', imagesData[currentPhoto - 2].photo);
        $('#first').show('slow');
        $('#second').attr('src', imagesData[currentPhoto - 1].photo);
        $('#third').attr('src', imagesData[currentPhoto].photo);
        $('#forth').attr('src', imagesData[currentPhoto + 1].photo);
        $('#fifth').attr('src', imagesData[currentPhoto + 2].photo);
        $('#fifth').show('fast');
        
      

        $('.box.first').html(imagesData[currentPhoto - 2].title);
        $('.box.second').html(imagesData[currentPhoto - 1].title);
        $('.box.third').html(imagesData[currentPhoto].title);
        $('.box.forth').html(imagesData[currentPhoto + 1].title);  
        $('.box.fifth').html(imagesData[currentPhoto + 2].title);  
        }
        $('#third').css('transform', 'scale(' + 1.15 + ')',
                    );
    });
    };
let photo_click = () => {
     $('.smallpicture').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        // indexClicked is now a string! if you need it as a number you have to change it
        // because for example "1" + 1 is going to be "11" and not 2
        let numberIndex = parseInt(indexClicked);
        // now numberIndex is a number 
         loadPhoto(currentPhoto + numberIndex);
         console.log(currentPhoto)
         console.log(currentPhoto + numberIndex);
      });
    };
      loadPhoto(currentPhoto);
      thumbs();
      photo_click();
      console.log(imagesData.length);
});


//       let min = 0;
// let max = imagesData.length;
// function limitNumberWithinRange(currentPhoto, min, max){
//     if (currentPhoto < min) { 
//         currentPhoto = min;
// }   else if (currentPhoto > max){
//         currentPhoto = max;
// }
// };
//   console.log(imagesData.length);
//   console.log(max);
// console.log(imagesData[0].title);


    // let imagesData = [ photo: {
    //     'img/DSC_0004.jpg',
    //     'img/DSC_0012.jpg',
    //     'img/DSC_0014.jpg',
    //     'img/DSC_0032.jpg',
    //     'img/DSC_0259.jpg',
    //     'img/DSC_0329-2.jpg',
    //     'img/DSC_0386-2.jpg',
    //     'img/DSC_0473.jpg',
    //     'img/DSC_0569-2.jpg',
    //     'img/DSC_0815-2.jpg',
    //     'img/DSC_0828-2.jpg'}
    // ];



  // let imagesData = [
    //     imagesData[0].photo('img/DSC_0004.jpg'),
    //     imagesData[0].title('Sanded Shore somewhere in Denmark'),
    //     imagesData[0].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[1].photo('img/DSC_0012.jpg'),
    //     imagesData[1].title('Beautiful Shore somewhere in Denmark'),
    //     imagesData[1].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[2].photo('img/DSC_0014.jpg'),
    //     imagesData[2].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[2].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[3].photo('img/DSC_0032.jpg'),
    //     imagesData[3].title('Wonderful landscape somewhere in Denmark'),
    //     imagesData[3].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[4].photo('img/DSC_0259.jpg'),
    //     imagesData[4].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[4].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[5].photo('img/DSC_0329-2.jpg'),
    //     imagesData[5].title('Sanded Shore somewhere in Denmark'),
    //     imagesData[5].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[6].photo('img/DSC_0386-2.jpg'),
    //     imagesData[6].title('Beautiful Shore somewhere in Denmark'),
    //     imagesData[6].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[7].photo('img/DSC_0473.jpg'),
    //     imagesData[7].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[7].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[8].photo('img/DSC_0569-2.jpg'),
    //     imagesData[8].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[8].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[9].photo('img/DSC_0815-2.jpg'),
    //     imagesData[9].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[9].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),
    //     imagesData[10].photo('img/DSC_0828-2.jpg'),
    //     imagesData[10].title('Wonderful Shore somewhere in Denmark'),
    //     imagesData[10].description('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum erat augue, at euismod quam luctus nec. Fusce auctor in sem in condimentum. Ut gravida vitae tortor eget finibus. Proin lobortis magna eu accumsan dictum. Phasellus et quam ornare, mattis orci a, blandit ante. Aliquam erat volutpat'),

     