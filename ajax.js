        $( document ).ready(function() {
            $("#send").click(
                function(){
                    sendAjaxForm('result_form', message, 'file.php');
                    return false; 
                }
            );
        });

        function sendAjaxForm(result_form, ajax_form, url) {
            jQuery.ajax({
                url:     url, //url страницы (action_ajax_form.php)
                type:     "POST", //метод отправки
                dataType: "html", //формат данных
                data: jQuery("#"+ajax_form).serialize(),  // Сеарилизуем объект
                success: function(response) { //Данные отправлены успешно
                    result = jQuery.parseJSON(response);
                    document.getElementById(result_form).innerHTML = "Имя: "+result.name+"<br />Телефон: "+result.email;
                },
                error: function(response) { // Данные не отправлены
                    document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправлены.";
                }
            });
        }