import { Component } from '@angular/core';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user properties as needed
  };

}
