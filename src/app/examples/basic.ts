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
        {"id":1,"itemName":"India", "reqN": "India", "isSelected": "false" },
        {"id":2,"itemName":"Singapore", "reqN": "Singapore", "isSelected": "false" },
        {"id":3,"itemName":"Australia", "reqN": "Australia", "isSelected": "false" },
        {"id":4,"itemName":"Canada", "reqN": "Canada", "isSelected": "false" },
        {"id":5,"itemName":"South Korea", "reqN": "Korea", "isSelected": "false" },
        {"id":6,"itemName":"Germany", "reqN": "Germany", "isSelected": "false" },
        {"id":7,"itemName":"France", "reqN": "France", "isSelected": "false" },
        {"id":8,"itemName":"Russia", "reqN": "Russia", "isSelected": "false" },
        {"id":9,"itemName":"Italy", "reqN": "Italy", "isSelected": "false" },
        {"id":10,"itemName":"Sweden", "reqN": "Sweden", "isSelected": "false" }
      ];
  this.selectedItems = [
    {"id":1,"itemName":"India", "reqN": "India", "isSelected": "false" },
     
      ];
  this.dropdownSettings = { 
            singleSelection: false, 
            text:"Select Countries",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class",
            showCheckbox: true
  
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
  