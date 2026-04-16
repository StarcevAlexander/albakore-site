import { Component, input } from '@angular/core';

export interface PartnerCardData {
  name: string;
  city: string;
  address: string;
  phones: { label: string; href: string }[];
}

@Component({
  selector: 'app-partner-card',
  imports: [],
  templateUrl: './partner-card.html',
  styleUrl: './partner-card.scss',
})
export class PartnerCard {
  partner = input.required<PartnerCardData>();
}
