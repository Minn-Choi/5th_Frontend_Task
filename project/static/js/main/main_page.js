/* main page - JS */

const resetButton = document.getElementById('reset_btn');
const categoryCheckboxes = document.querySelectorAll('input[name="check_group"]');
const categoryCheckbox_skin = document.getElementById('check1');
const categoryCheckbox_bu = document.getElementById('check2');
const categoryCheckbox_bre = document.getElementById('check3');
const sub1 = document.getElementById('skin1');
const sub2 = document.getElementById('skin2');
const sub3 = document.getElementById('skin3');
const cate = document.getElementById('category1');
const butyx = document.getElementById('buty');
const skinx = document.getElementById('skin');
const snackx = document.getElementById('snack');

const total = document.getElementById('total');


function resetCategoryCheckboxes() {
    categoryCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    total.textContent = "총 508건";
}

const categoryfilter = () => {
    let total_num = 0;
    if(categoryCheckbox_skin.checked == false && categoryCheckbox_bu.checked == false && categoryCheckbox_bre.checked == false){
        cate.style.display='none';
        resetButton.style.color = "#dddddd";
        total.textContent= "총 508건";
    }
    else
    {
        cate.style.display = '';
        resetButton.style.color = "#999999";

        if(categoryCheckbox_skin.checked==false){
            sub2.style.display='none';
        }
        if(categoryCheckbox_skin.checked==true){
            sub2.style.display='';
            total_num += 68;
        }
        if(categoryCheckbox_bu.checked==false){
            sub1.style.display='none';
        }
        if(categoryCheckbox_bu.checked==true){
            sub1.style.display='';
            total_num += 40;
        }
        if(categoryCheckbox_bre.checked==false){
            sub3.style.display='none';
        }
        if(categoryCheckbox_bre.checked==true){
            sub3.style.display='';
            total_num += 28;
        }
    }
    total.textContent = "총 " + total_num + "건";
}

// button btn_bu  checkbox ckb_hi

const butyxfilter = () => {
    categoryCheckbox_bu.checked = false;
    categoryfilter();
}
const skinxfilter = () => {
    categoryCheckbox_skin.checked = false;
    categoryfilter();
}
const snackxfilter = () => {
    categoryCheckbox_bre.checked = false;
    categoryfilter();
}
resetButton.addEventListener('click', resetCategoryCheckboxes);
categoryCheckbox_skin.addEventListener('change', categoryfilter);
categoryCheckbox_bu.addEventListener('change', categoryfilter);
categoryCheckbox_bre.addEventListener('change', categoryfilter);
butyx.addEventListener('click', butyxfilter);
skinx.addEventListener('click', skinxfilter);
snackx.addEventListener('click', snackxfilter);