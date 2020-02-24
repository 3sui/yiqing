$(document).ready(function () {
    //点击联系人弹窗联系人姓名电话
    $(".alert-tel-btn").click(function () {
        console.log(123)
        $(".alert-tel").css("display", "flex");
    });
    $(".alert-tel-box-true").click(function () {
        console.log(123)
        $(".alert-tel").css("display", "none");
    });

    //点击联系人弹窗联系人姓名电话

    $(".alert-tel-btn1").click(function () {
        console.log(123)
        $(".alert-tel1").css("display", "flex");
    });
    $(".alert-tel-box-true1").click(function () {
        console.log(123)
        $(".alert-tel1").css("display", "none");
    });

    page()
    //分页代码
    function page() {
        let page = 1
        let pages = $('.pages')

        for (let i = 0; i < pages.length; i++) {
            console.log(page)

            let a = $("<a>" + (i + 1) + "</a>")
            a.addClass('page-link')
            let li = $("<li></li>")
            li.addClass("page-item show-pages")
            li.append(a)
            $('.next').before(li)
        }
        $('.show-pages').eq(page - 1).addClass('active')
        $('.show-pages').each(function (c) {
            // console.log($('.show-pages')[c])
            // $('.show-pages')[c].removeClass('active')

            $(this).click(function () {
                // changePage(c)
                $(this).addClass('active').siblings().removeClass("active")
                page = +$(this).find('a').text()
                console.log(page)
                changePage(page)

            })
        })
        // console.log(pages.length)
        changePage(page)
        $(".cut").click(function () {
            page--
            console.log(page)

            changePage(page)


        });
        $(".add").click(function () {
            page++

            // console.log(123)
            // if (page >= 2) {
            //     page = 2
            //     return
            // } else {}
            // console.log(page)
            // $(".prev").removeClass('disabled')
            // $(".next").addClass('disabled')
            // $(".one").removeClass('active')
            // $(".two").addClass('active')
            changePage(page)
        })

        function changePage(page) {
            console.log(pages.eq(0))
            pages.eq(page - 1).removeClass('dn').siblings('.pages').addClass("dn")
            $('.show-pages').eq(page - 1).addClass('active').siblings().removeClass("active")
            console.log($('.show-pages').eq(page - 1))

            if (page === 1) {
                $(".prev").addClass('disabled')
                $(".next").removeClass('disabled')
            } else if (page === pages.length) {
                $(".prev").removeClass('disabled')
                $(".next").addClass('disabled')
            } else {
                $(".prev").removeClass('disabled')
                $(".next").removeClass('disabled')
            }
            // if (page === 1) {
            //     $('.page1').removeClass('dn')
            //     $('.page2').addClass('dn')

            // } else if (page === 2) {
            //     $('.page2').removeClass('dn')
            //     $('.page1').addClass('dn')

            // }
        }
    }



    //获取疫情最新数据
    $.ajax({
        // 请求的路径 - 接口
        url: 'https://lab.isaaclin.cn/nCoV/api/overall',
        // 请求的方式 - get|post
        type: 'get',
        // 请求的数据
        data: {
            latest: 1
        },
        // 请求成功的响应
        success: function (response) {
            if (response.success) {
                // console.log(response.results);
                // console.log(response);
                $('.diagnosed').text(response.results[0].confirmedCount)
                $('.suspect').text(response.results[0].suspectedCount)
                $('.death').text(response.results[0].deadCount)
                $('.cured').text(response.results[0].curedCount)
                $('.diagnosedIncr').text(response.results[0].confirmedIncr)
                $('.suspectIncr').text(response.results[0].suspectedIncr)
                $('.deathIncr').text(response.results[0].deadIncr)
                $('.curedIncr').text(response.results[0].curedIncr)
                // $('#data').text(response.results.data)


                // obj = JSON.parse(response);
                // console.log(obj, typeof obj);
                // let name = obj.data.name;
                // $('h1').text(name)
            } else {
                console.log('接口出现故障请及时切换接口')
            }
        },
        // 请求失败的响应
        error: function (error) {
            console.log(error);
        }
    })

});