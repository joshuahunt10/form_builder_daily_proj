var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

for (i=0; i < formData.length; i++){
  let mainBody = document.querySelector('.main-body');

  if(formData[i].type === 'select'){
    let select = document.createElement("select");
    select.id = formData[i].id;
    mainBody.appendChild(select);
    let optionBlank = document.createElement('option');
    optionBlank.label = "Select Language...";
    optionBlank.disabled = true;
    optionBlank.selected = true;
    select.appendChild(optionBlank);
    let inputSelect = formData[i].type;

    for (var w = 0; w < formData[i].options.length; w++) {
      console.log(formData[i].options[w]);

      let selectOption = document.createElement("option")
      console.log(selectOption);

      selectOption.label = formData[i].options[w].label;
      selectOption.value = formData[i].options[w].value;

      select.appendChild(selectOption);

    }
  } else if (formData[i].type === 'textarea') {
    let textArea = document.createElement("textarea")
    textArea.label = formData[i].label;
    textArea.id = formData[i].id;
    textArea.placeholder = formData[i].label;
    mainBody.appendChild(textArea);

  }else {
    let input = document.createElement("input");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa " + formData[i].icon);

    // icon.class = formData[i].type
    // icon.class = formData[i].icon;
    input.appendChild(icon);
    input.type = formData[i].type;
    input.placeholder = formData[i].label;
    input.id = formData[i].id;
    mainBody.appendChild(input);
  }

}
