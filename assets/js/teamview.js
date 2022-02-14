function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i+=2) {
        if (i == data.length-1 && data.length%2 == 1) {
            var name1 = data[i].firstname + ' ' + data[i].lastname;
            var email1 = data[i].email;
            var major1 = data[i].major;
            var gradyear1 = data[i].gradyear;
            var favracket1 = data[i].favracket;
            var hometown1 = data[i].hometown;
            var funfact1 = data[i].funfact;

            var div1_1 = document.createElement("div");
            div1_1.classList.add('rosterrow');

            var div1_2 = document.createElement("div");
            div1_2.classList.add('rostercolumnpfp');
            div1_1.appendChild(div1_2);

            var pfpelement1 = document.createElement("img");
            pfpelement1.setAttribute('src', 'images/' + name1.toLowerCase() + '.png');
            pfpelement1.setAttribute('alt', name1);
            pfpelement1.setAttribute('height', '200px');
            pfpelement1.setAttribute('width', '200px');
            pfpelement1.setAttribute('align', 'right');
            div1_2.appendChild(pfpelement1);

            var div1_3 = document.createElement("div");
            div1_3.classList.add('rostercolumn');

            var displayname1 = document.createElement('H3');
            displayname1.innerHTML = name1;
            var displaymajoryear1 = document.createElement('H2');
            displaymajoryear1.innerHTML = major1 + " | " + gradyear1;
            var displayinfo1 = document.createElement('p');
            displayinfo1.innerHTML = "<b>Email:</b> " + email1 + "<br>" + `
                <b>Favorite Racket:</b> ` + favracket1 + "<br>" + `
                <b>Hometown:</b> ` + hometown1 + "<br>" + `
                <b>Fun Fact:</b> ` + funfact1
            div1_3.appendChild(displayname1);
            div1_3.appendChild(displaymajoryear1);
            div1_3.appendChild(displayinfo1);
            div1_1.appendChild(div1_3);
            mainContainer.appendChild(div1_1);
        }
        else {
            var name1 = data[i].firstname + ' ' + data[i].lastname;
            var email1 = data[i].email;
            var major1 = data[i].major;
            var gradyear1 = data[i].gradyear;
            var favracket1 = data[i].favracket;
            var hometown1 = data[i].hometown;
            var funfact1 = data[i].funfact;

            var name2 = data[i+1].firstname + ' ' + data[i].lastname;
            var email2 = data[i+1].email;
            var major2 = data[i+1].major;
            var gradyear2 = data[i+1].gradyear;
            var favracket2 = data[i+1].favracket;
            var hometown2 = data[i+1].hometown;
            var funfact2 = data[i+1].funfact;

            var div1_1 = document.createElement("div");
            div1_1.classList.add('rosterrow');

            var div1_2 = document.createElement("div");
            div1_2.classList.add('rostercolumnpfp');
            div1_1.appendChild(div1_2);

            var pfpelement1 = document.createElement("img");
            pfpelement1.setAttribute('src', 'images/' + name1.toLowerCase() + '.png');
            pfpelement1.setAttribute('alt', name1);
            pfpelement1.setAttribute('height', '200px');
            pfpelement1.setAttribute('width', '200px');
            pfpelement1.setAttribute('align', 'right');
            div1_2.appendChild(pfpelement1);

            var div1_3 = document.createElement("div");
            div1_3.classList.add('rostercolumn');

            var displayname1 = document.createElement('H3');
            displayname1.innerHTML = name1;
            var displaymajoryear1 = document.createElement('H2');
            displaymajoryear1.innerHTML = major1 + " | " + gradyear1;
            var displayinfo1 = document.createElement('p');
            displayinfo1.innerHTML = "<b>Email:</b> " + email1 + "<br>" + `
                <b>Favorite Racket:</b> ` + favracket1 + "<br>" + `
                <b>Hometown:</b> ` + hometown1 + "<br>" + `
                <b>Fun Fact:</b> ` + funfact1
            div1_3.appendChild(displayname1);
            div1_3.appendChild(displaymajoryear1);
            div1_3.appendChild(displayinfo1);
            div1_1.appendChild(div1_3);

            /////////////////////////////////////////////////////////

            var div1_4 = document.createElement("div");
            div1_4.classList.add('rostercolumnpfp');
            div1_1.appendChild(div1_4)

            var pfpelement2 = document.createElement("img");
            pfpelement2.setAttribute('src', 'images/' + name2.toLowerCase() + '.png');
            pfpelement2.setAttribute('alt', name2);
            pfpelement2.setAttribute('height', '200px');
            pfpelement2.setAttribute('width', '200px');
            pfpelement2.setAttribute('align', 'right');
            div1_2.appendChild(pfpelement2);

            var div1_5 = document.createElement("div");
            div1_5.classList.add('rostercolumn');

            var displayname2 = document.createElement('H3');
            displayname2.innerHTML = name2;
            var displaymajoryear2 = document.createElement('H2');
            displaymajoryear2.innerHTML = major2 + " | " + gradyear2;
            var displayinfo2 = document.createElement('p');
            displayinfo2.innerHTML = "<b>Email:</b> " + email2 + "<br>" + `
                <b>Favorite Racket:</b> ` + favracket2 + "<br>" + `
                <b>Hometown:</b> ` + hometown2 + "<br>" + `
                <b>Fun Fact:</b> ` + funfact2
            div1_5.appendChild(displayname2);
            div1_5.appendChild(displaymajoryear2);
            div1_5.appendChild(displayinfo2);
            div1_1.appendChild(div1_5);
            //var div = document.createElement("div");
            //div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
            mainContainer.appendChild(div1_1);
        }
    }
}