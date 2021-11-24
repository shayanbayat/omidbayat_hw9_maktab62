$(document).ready(function () {
    $("#password").on('keyup',function () {
        let i = $("#password").val()
        if (i.length === 0) {
            $(".state").removeClass('text-danger')
            $(".state").removeClass('text-primary')
            $("p").text('password is empty')
        }
        else {
            let str = i.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g)
            if (str === null) {
                $(".state").removeClass('text-primary')
                $(".state").addClass('text-danger')
                $("p").text('the password that inter is not valid')
            }
            if (str !== null) {
                $(".state").addClass('text-primary')
                $(".state").removeClass('text-danger')
                $("p").text('good :D')
            }
        }
    })
    $("#eye").on('click',function (){
        $("#eye").toggleClass('fa-eye fa-eye-slash')
        $("input").attr('type',function (index,attr) {
            return attr === 'password'? 'text':'password'
        })

    })
})