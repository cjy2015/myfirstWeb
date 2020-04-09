        // 객체 만들기
        var Links = {
            setColor: function (color) {
                var alist = document.querySelectorAll('a');
                var len = alist.length;
                var i = 0;
                for (i = 0; i != len; i++) {
                    alist[i].style.color = color;
                }
            }
        };

        // 객체 만들기
        var Body = {
            setColor: function (color) {
                document.querySelector('body').style.color = color;
            },
            setBackgroundColor: function (color) {
                document.querySelector('body').style.backgroundColor = color;
            }
        };

        function nightdayhandler(self) {
            var temp = document.querySelector('body');
            if (self.value === 'night') {
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day';

                Links.setColor('yellow');

            } else {
                Body.setBackgroundColor('white');
                Body.setColor('black');
                self.value = 'night';

                Links.setColor('blue');
            }
        }
