


// Get Request 
axios.get('https://reqres.in/api/users?page=2')
.then((res)=> getHandelerFunc(res))
.catch((err) => console.log(err))

const getHandelerFunc = (data) => {
    
    console.log(data);

    data.data.data.forEach(item => {

        let container = document.querySelector('.container');
        let employee = document.createElement('div');
        employee.setAttribute('class', 'employee');
        employee.setAttribute('id', 'P' + item.id);

        let firstNames = document.createElement('H3');
        firstNames.setAttribute('class', 'first_name');
        firstNames.innerHTML = item.first_name + " " + item.last_name;

        let email = document.createElement('p');
        email.setAttribute('class', 'email');
        email.innerHTML = item.email;

        let imageContainer = document.createElement('div')
        imageContainer.setAttribute('class', 'image-container')
        let image = new Image();
        image.src = item.avatar;



        imageContainer.appendChild(image)
        employee.appendChild(firstNames);
        employee.appendChild(email);
        employee.appendChild(imageContainer);
        container.appendChild(employee);

    })
}
