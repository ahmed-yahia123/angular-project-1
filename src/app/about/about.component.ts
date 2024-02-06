import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
products:Product[]=[
    {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
  {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
  {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
  {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
  {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
  {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
    {img:"../../assets/image/3.jpg",title:"laptop Hp",description:"laptop for work",price:45000},
      {img:"../../assets/image/1.jpg",title:"laptop lenovo",description:"laptop for work",price:35000},
    {img:"../../assets//image/2.jpg",title:"laptop Dell",description:"laptop for gaming",price:30000},
]
}
interface Product {
  img: string,
  title: string,
  description: string,
  price: number,
}