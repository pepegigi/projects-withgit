from django.shortcuts import render
from .models import Blog
from .forms import ContactForm
# Create your views here.

def home(request):
    bg1= Blog()
    bg1.img='img5.jpg'
    bg1.title= 'Top 10 Desserts you should deffinettly make'
    bg1.desc='This is recipes are to die for which i hope you will be interested in ....'
    bg1.link='Continue Reading...'
    bg1.subtitle='Kanem tonic. Sep 23 ,2024'
    
    bg2=Blog()
    bg2.img='img7.jpg'
    bg2.title='The miracles of fruits & vegitables'
    bg2.desc='Recomended by Doctors fruits and vegetables are live savers,they literally save your life ...'
    bg2.link='Continue Reading...'
    bg2.subtitle='Kanem tonic. Oct 13 ,2024'
    
    bg3=Blog()
    bg3.img='img12.jpg'
    bg3.title='Top 10 expensive cars in 2024'
    bg3.desc='Every persons dream is to own a car.In this blog I will show you top 10 expensive and mind blowing cars...'
    bg3.link='Continue Reading...'
    bg3.subtitle='Kanem tonic. Nov 02 ,2024'
    
    bgs=[bg1,bg2,bg3]
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            firstname = form.cleaned_data['firstname']
            lastname = form.cleaned_data['lastname']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            
            return render(request, 'success.html', {'firstname': firstname})

    else:
        form = ContactForm()
    return render(request,'home.html',{'bgs': bgs,'form': form}) 
