function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i <= data.length-2; i+=2) {
        //handle the first even number of team entries
        //these are handled two at a time due to two entries
        //existing within each column
        var position1 = data[i].position;
        var name1 = data[i].firstname + ' ' + data[i].lastname;
        var first1 = data[i].firstname;
        var last1 = data[i].lastname;
        var major1 = data[i].major;
        var gradyear1 = data[i].gradyear;

        var position2 = data[i+1].position;
        var name2 = data[i+1].firstname + ' ' + data[i+1].lastname;
        var first2 = data[i+1].firstname;
        var last2 = data[i+1].lastname;
        var major2 = data[i+1].major;
        var gradyear2 = data[i+1].gradyear;

        var full_row = document.createElement("div");
        full_row.classList.add('rosterrow');

        var column_1_img = document.createElement("div");
        column_1_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_1_img);

        var pfpelement1 = document.createElement("img");
        pfpelement1.setAttribute('src', '../../images/' + first1.toLowerCase() + '_' + last1.toLowerCase() + '.png');
        pfpelement1.setAttribute('alt', name1);
        pfpelement1.setAttribute('height', '120px');
        pfpelement1.setAttribute('width', '120px');
        pfpelement1.setAttribute('align', 'right');
        column_1_img.appendChild(pfpelement1);

        var column_1_info = document.createElement("div");
        column_1_info.classList.add('rostercolumn');

        var displaypos1 = document.createElement('p');
        displaypos1.innerHTML = position1;
        var displayname1 = document.createElement('H3');
        displayname1.innerHTML = name1;
        var displaymajoryear1 = document.createElement('H2');
        displaymajoryear1.innerHTML = major1 + " | " + gradyear1;
        column_1_info.appendChild(displaypos1);
        column_1_info.appendChild(displayname1);
        column_1_info.appendChild(displaymajoryear1);
        full_row.appendChild(column_1_info);

        /////////////////////////////////////////////////////////second row in column

        var column_2_img = document.createElement("div");
        column_2_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_2_img);

        var pfpelement2 = document.createElement("img");
        pfpelement2.setAttribute('src', '../../images/' + first2.toLowerCase() + '_' + last2.toLowerCase() + '.png');
        pfpelement2.setAttribute('alt', name2);
        pfpelement2.setAttribute('height', '120px');
        pfpelement2.setAttribute('width', '120px');
        pfpelement2.setAttribute('align', 'right');
        column_2_img.appendChild(pfpelement2);

        var column_2_info = document.createElement("div");
        column_2_info.classList.add('rostercolumn');

        var displaypos2 = document.createElement('p');
        displaypos2.innerHTML = position2;
        var displayname2 = document.createElement('H3');
        displayname2.innerHTML = name2;
        var displaymajoryear2 = document.createElement('H2');
        displaymajoryear2.innerHTML = major2 + " | " + gradyear2;
        column_2_info.appendChild(displaypos2);
        column_2_info.appendChild(displayname2);
        column_2_info.appendChild(displaymajoryear2);
        full_row.appendChild(column_2_info);
        //var div = document.createElement("div");
        //div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        mainContainer.appendChild(full_row);
    };
    if (data.length % 2 == 1) {
        //if odd # entries, last person gets their own row
        i = data.length - 1;
        var position1 = data[i].position;
        var name1 = data[i].firstname + ' ' + data[i].lastname;
        var first1 = data[i].firstname;
        var last1 = data[i].lastname;
        var major1 = data[i].major;
        var gradyear1 = data[i].gradyear;

        var full_row = document.createElement("div");
        full_row.classList.add('rosterrow');

        var column_1_img = document.createElement("div");
        column_1_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_1_img);

        var pfpelement1 = document.createElement("img");
        pfpelement1.setAttribute('src', '../../images/' + first1.toLowerCase() + '_' + last1.toLowerCase() + '.png');
        pfpelement1.setAttribute('alt', name1);
        pfpelement1.setAttribute('height', '120px');
        pfpelement1.setAttribute('width', '120px');
        pfpelement1.setAttribute('align', 'right');
        column_1_img.appendChild(pfpelement1);

        var column_1_info = document.createElement("div");
        column_1_info.classList.add('rostercolumn');

        var displaypos1 = document.createElement('p');
        displaypos1.innerHTML = position1;
        var displayname1 = document.createElement('H3');
        displayname1.innerHTML = name1;
        var displaymajoryear1 = document.createElement('H2');
        displaymajoryear1.innerHTML = major1 + " | " + gradyear1;
        column_1_info.appendChild(displaypos1);
        column_1_info.appendChild(displayname1);
        column_1_info.appendChild(displaymajoryear1);
        full_row.appendChild(column_1_info);

        //filler space
        var column_2_img = document.createElement("div");
        column_2_img.classList.add('rostercolumnpfp');
        full_row.appendChild(column_2_img);
        var column_2_info = document.createElement("div");
        column_2_info.classList.add('rostercolumn');
        full_row.appendChild(column_2_info);

        var mainContainerExtra = document.getElementById("myDataExtra");
        mainContainerExtra.appendChild(full_row);
    };
};