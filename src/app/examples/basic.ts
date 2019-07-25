import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AngularMultiSelect } from 'projects/angular2-multiselect-dropdown-lib/src/lib';

@Component({
    templateUrl: './views/view.html'
})
export class BasicExample implements OnInit {


    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
  
    constructor() { }
  
    ngOnInit() {
  
      this.dropdownList = [
        {"id":1,"name":"India", "reqN": "India", "isSelected": "false" },
        {"id":2,"name":"Singapore", "reqN": "Singapore", "isSelected": "false" },
        {"id":3,"name":"Australia", "reqN": "Australia", "isSelected": "false" },
        {"id":4,"name":"Canada", "reqN": "Canada", "isSelected": "false" },
        {"id":5,"name":"South Korea", "reqN": "Korea", "isSelected": "false" },
        {"id":6,"name":"Germany", "reqN": "Germany", "isSelected": "false" },
        {"id":7,"name":"France", "reqN": "France", "isSelected": "false" },
        {"id":8,"name":"Russia", "reqN": "Russia", "isSelected": "false" },
        {"id":9,"name":"Italy", "reqN": "Italy", "isSelected": "false" },
        {"id":10,"name":"Sweden", "reqN": "Sweden", "isSelected": "false" }
      ];
  this.selectedItems = [
    {"id":1,"name":"India", "reqN": "India", "isSelected": "false" },
    {"id":2,"name":"Singapore", "reqN": "Singapore", "isSelected": "false" },
    {"id":3,"name":"Australia", "reqN": "Australia", "isSelected": "false" },
    {"id":4,"name":"Canada", "reqN": "Canada", "isSelected": "false" },
    {"id":5,"name":"South Korea", "reqN": "Korea", "isSelected": "false" },
    {"id":6,"name":"Germany", "reqN": "Germany", "isSelected": "false" },
    {"id":7,"name":"France", "reqN": "France", "isSelected": "false" },
    {"id":8,"name":"Russia", "reqN": "Russia", "isSelected": "false" },
    {"id":9,"name":"Italy", "reqN": "Italy", "isSelected": "false" },
    {"id":10,"name":"Sweden", "reqN": "Sweden", "isSelected": "false" }
     
      ];
  this.dropdownSettings = { 
            singleSelection: false, 
            text:"Select Countries",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class",
            showCheckbox: true,
            limitSelection: 5
          };            
    }
  
    onItemSelect(item:any){
      console.log(item);
      item.isSelected = true;
      console.log('dropdownSettings', this.dropdownSettings);
      console.log(this.dropdownList);
  }
  
  OnItemDeSelect(item:any){
      item.isSelected = false;
      console.log(item);
      console.log('dropdownSettings', this.dropdownSettings);
  
      console.log(this.dropdownList);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }
  getFocusOut(item, value){
    console.log('value', value);
    item.reqN = value;
    console.log(this.dropdownList);
    
  }
  
  getFocus(item){
    console.log('get focus');
    event.stopPropagation();
    item.stopPropagation();
  
  }
  
  onGroupSelect($event){
    console.log($event);
    
  }
  getSelectAllValue($event){
    console.log('event', $event);
    
}
  
  onClickOutideDropdown($event){
    console.log("event>>>>>>>", $event);
    // this.varietalDropdown.openDropdown()
  }
  }
  