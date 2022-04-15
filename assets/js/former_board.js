function toggle_former(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length-1; i+=4) {
        //handle the first even number of team entries
        //these are handled two at a time due to two entries
        //existing within each column
        var name1 = data[i].firstname + ' ' + data[i].lastname;
        var first1 = data[i].firstname;
        var last1 = data[i].lastname;
        var semserved1 = data[i].semserved;
        var pos1 = data[i].position;

        var name2 = data[i+1].firstname + ' ' + data[i+1].lastname;
        var first2 = data[i+1].firstname;
        var last2 = data[i+1].lastname;
        var semserved2 = data[i+1].semserved;
        var pos2 = data[i+1].position;

        var name3 = data[i+2].firstname + ' ' + data[i+2].lastname;
        var first3 = data[i+2].firstname;
        var last3 = data[i+2].lastname;
        var semserved3 = data[i+2].semserved;
        var pos3 = data[i+2].position;

        var name4 = data[i+3].firstname + ' ' + data[i+3].lastname;
        var first4 = data[i+3].firstname;
        var last4 = data[i+3].lastname;
        var semserved4 = data[i+3].semserved;
        var pos4 = data[i+3].position;
        
        var full_row = document.createElement("div");
        full_row.classList.add('rosterrow');

        var column_1_img = document.createElement("div");
        column_1_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_1_img);

        var pfpelement1 = document.createElement("img");
        pfpelement1.setAttribute('src', '../../images/' + first1.toLowerCase() + '_' + last1.toLowerCase() + '.png');
        pfpelement1.setAttribute('alt', name1);
        pfpelement1.setAttribute('height', '75px');
        pfpelement1.setAttribute('width', '75px');
        pfpelement1.setAttribute('align', 'right');
        column_1_img.appendChild(pfpelement1);
        if (name1 != name2) {
            var pfpelement2 = document.createElement("img");
            pfpelement2.setAttribute('src', '../../images/' + first2.toLowerCase() + '_' + last2.toLowerCase() + '.png');
            pfpelement2.setAttribute('alt', name2);
            pfpelement2.setAttribute('height', '75px');
            pfpelement2.setAttribute('width', '75px');
            pfpelement2.setAttribute('align', 'right');
            column_1_img.appendChild(pfpelement2);
        }

        var column_1_info = document.createElement("div");
        column_1_info.classList.add('rostercolumn');

        var displaysem1 = document.createElement('p');
        displaysem1.innerHTML = semserved1
        var displaycap1 = document.createElement('p');
        var displaypres1 = document.createElement('p');
        if (pos1 == 'Team Captain') {
            displaycap1.innerHTML = "Team Captain: " + name1;
            displaypres1.innerHTML = "President: " + name2;
        }
        else {
            displaycap1.innerHTML = "Team Captain: " + name2;
            displaypres1.innerHTML = "President: " + name1;
        }
        column_1_info.appendChild(displaysem1);
        column_1_info.appendChild(displaycap1);
        column_1_info.appendChild(displaypres1);
        full_row.appendChild(column_1_info);

        /////////////////////////////////////////////////////////second row in column

        var column_2_img = document.createElement("div");
        column_2_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_2_img);

        var pfpelement3 = document.createElement("img");
        pfpelement3.setAttribute('src', '../../images/' + first3.toLowerCase() + '_' + last3.toLowerCase() + '.png');
        pfpelement3.setAttribute('alt', name3);
        pfpelement3.setAttribute('height', '75px');
        pfpelement3.setAttribute('width', '75px');
        pfpelement3.setAttribute('align', 'right');
        column_2_img.appendChild(pfpelement3);
        if (name3 != name4) {
            var pfpelement4 = document.createElement("img");
            pfpelement4.setAttribute('src', '../../images/' + first4.toLowerCase() + '_' + last4.toLowerCase() + '.png');
            pfpelement4.setAttribute('alt', name4);
            pfpelement4.setAttribute('height', '75px');
            pfpelement4.setAttribute('width', '75px');
            pfpelement4.setAttribute('align', 'right');
            column_2_img.appendChild(pfpelement4);
        }

        var column_2_info = document.createElement("div");
        column_2_info.classList.add('rostercolumn');

        var displaysem2 = document.createElement('p');
        displaysem2.innerHTML = semserved3
        var displaycap2 = document.createElement('p');
        var displaypres2 = document.createElement('p');
        if (pos3 == 'Team Captain') {
            displaycap2.innerHTML = "Team Captain: " + name3;
            displaypres2.innerHTML = "President: " + name4;
        }
        else {
            displaycap3.innerHTML = "Team Captain: " + name4;
            displaypres3.innerHTML = "President: " + name3;
        }
        column_2_info.appendChild(displaysem2);
        column_2_info.appendChild(displaycap2);
        column_2_info.appendChild(displaypres2);
        full_row.appendChild(column_2_info);

        mainContainer.appendChild(full_row);
    };
};