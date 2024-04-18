import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})
export class RowListComponent  {

  formData: any = {};
  locationFlag: boolean = false;
  countryFlag: boolean = false;
  addingRow: boolean = false;
  editingRowIndex: number = -1;
  countries: string[] = ['India', 'USA', 'Canada'];
  states: { [key: string]: string[] } = {
    'India': ['Delhi', 'Mumbai', 'Bangalore'],
    'USA': ['New York', 'California', 'Texas'],
    'Canada': ['Toronto', 'Montreal', 'Vancouver']
  };
  citiesByState: { [key: string]: string[] } = {
    'Delhi': ['New Delhi', 'North Delhi'],
    'Mumbai': ['Mumbai City', 'Navi Mumbai'],
    'Bangalore': ['Bangalore East', 'Bangalore West'], 
    'New York': ['Manhattan', 'Brooklyn'],
    'California': ['Los Angeles', 'San Francisco'],
    'Texas': ['Houston', 'Dallas'], 
    'Toronto': ['Downtown Toronto', 'North York'], 
    'Montreal': ['Montreal East', 'Montreal West'], 
    'Vancouver': ['Downtown Vancouver', 'Richmond'] 
  };
  
  rows: any[] = [];

  constructor(private snackBar: MatSnackBar) {}

  handleCheckboxChange(event: any) {
    if (event.target.checked) {
      this.formData.country = 'India';
      this.formData.location = true;
      this.countryFlag = true;
      this.locationFlag = false;
    } else {
      this.formData.country = '';
      this.countryFlag = false;
    }
  }
  
  handleCountryChange(event: any) {
    if (event.target.value) {
      this.formData.country = event.target.value;
      this.formData.location = false;
      this.countryFlag = false;
      this.locationFlag = true;
    } else {
      this.formData.country = '';
      // this.countryFlag = false;
      this.locationFlag = false;
    }
  }
  



  handleStateChange(row: any, event: any) {
    row.selectedState = event.target.value;
    row.availableCities = this.citiesByState[event.target.value] || [];
  }

  handleAddRow() {
  
    const areAllPreviousRowsSaved = this.rows.every(row => !row.isNew);
  
    if (areAllPreviousRowsSaved || this.rows.length === 0) {
      if (this.locationFlag || this.formData.country) {
        const newRow = {
          isNew: true,
          selectedCountry: this.formData.country,
          availableStates: this.states[this.formData.country] || [],
          selectedState: '',
          availableCities: [],
          remarks: this.formData.remarks
        };
        this.rows.push(newRow);
        this.addingRow = true;
  
        this.snackBar.open('Row added successfully. Form fields disabled.', 'Close', { duration: 3000 });
      } else {
        this.snackBar.open('Please select a location or fill in the country field.', 'Close', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Please save all previous rows before adding a new one.', 'Close', { duration: 3000 });
    }
  }
  
  

  handleEditRow(row: any) {
    const areAllRowsSaved = this.rows.every(r => !r.isNew);
  
    if (areAllRowsSaved) {
      row.disabled = false;
      row.originalState = row.selectedState;
      row.originalCity = row.selectedCity;
    } else {
      this.snackBar.open('Please save all rows before editing any.', 'Close', { duration: 3000 });
    }
  }
  
  
  handleSaveRow(row: any) {
    if (!row.selectedState || !row.selectedCity || row.availableCities.length === 0 || row.selectedCity === '') {
      this.snackBar.open('Please select both state and city before saving.', 'Close', { duration: 3000 });
      return; // Exit the function without saving
    }
  
    // Disable input fields in the saved row
    row.disabled = true;
    row.isNew = false; // Update isNew property
  
    // Here, you can add any additional logic needed to handle the save operation
  
    this.snackBar.open('Row saved successfully.', 'Close', { duration: 3000 });
  }
  
 
  
  handleCancelEdit(row: any, index: number) {
    // If the row is marked as new, delete it regardless of any selections
    if (row.isNew) {
      this.rows.splice(index, 1); // Delete the row
      this.snackBar.open('Unsaved row removed.', 'Close', { duration: 3000 });
    } else {
      // For rows that are not new, revert any changes
      row.disabled = true;
      row.selectedState = row.originalState;
      row.selectedCity = row.originalCity;
    }
  
    // Reset form fields if all rows are deleted
    if (this.rows.length === 0) {
      this.enableFormFields();
    }
  }
   
  


  handleDeleteRow(index: number) {
    this.rows.splice(index, 1);
    if (this.rows.length === 0) {
      this.enableFormFields();
    }
  }
  
  enableFormFields() {
    this.addingRow = false;
    this.locationFlag = false;
    this.countryFlag = false;
  }
  
  
  

  resetFormData() {
    this.formData = {};
    this.locationFlag = false;
    this.countryFlag = false;
  }


}
