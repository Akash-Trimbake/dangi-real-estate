import sys
import os
os.chdir("../../public/Photos")
files = os.listdir()
path = os.getcwd()

# for i in files:
#     "name" = i
#     for j in "name":
#         "name".replace(',','')
#     print("name")

photos = [
  {
    "name": "Rudra_Prasad_Niraula_Morang,_Sunsari,_Jhapa,_Nepal",
    "path": "Photos/0.avif",
  },
  { "name": "Binod_Bhagat_Morang,_Sundari,_KTM_Valley", "path": "Photos/1.avif" },
  { "name": "David_Sheppard", "path": "Photos/2.avif" },
  { "name": "Hari_Bahadur_Rayamajhi_Kathmandu_Valley", "path": "Photos/3.avif" },
  { "name": "Kailas_Jang_Dangi_MA_&_Nepal", "path": "Photos/4.avif" },
  { "name": "Ramesh_Dhakal_ Nepal", "path": "Photos/5.avif" },
  { "name": "Gajendra_Thapaliya,All_Nepal", "path": "Photos/6.avif" },
  {
    "name": "Rajesh_Pulami_Kathmandu_Valley,_Tanahu,_Gorkha_Kaski,_Syanj",
    "path": "Photos/7.avif",
  },
  { "name": "Ramesh_Khadka_Kathmandu_Valley,_Nuwakot", "path": "Photos/8.avif" },
  { "name": "Padam_Khadka_Kathmandu_Valley,_Kavre", "path": "Photos/9.avif" },
  { "name": "Hikmat_Miya_Kaski,_Baglung,_Syanja,_Palp", "path": "Photos/10.avif" },
  {
    "name": "Phagendra_Raj_Rai_Sunsari,_ Morang,_Dhankuta,_Bhojpur",
    "path": "Photos/11.avif",
  },
  {
    "name": "Pawan_Kumar_Dangi_Kathmandu_Valley,_Terhathum",
    "path": "Photos/12.avif",
  },
  {
    "name": "Krishna_Dangi_Chandigard,_Punjab,_Hariyana,_Delhi,_Ind",
    "path": "Photos/13.avif",
  },
  { "name": "Kumar_Singh_Dangi_NH,_MA,_NEPAL_&_Ind", "path": "Photos/14.avif" },
  { "name": "Akas_Bisunkhe_Bhaktapur,Karve", "path": "Photos/15.avif" },
  {
    "name": "Kundan_Rai_Sunsari,_Morang,_Dhankuta,_Bhojpur,_Jhapa,Ilam",
    "path": "Photos/16.avif",
  },
  {
    "name": "Binod_Kharel_Bara,_Parsa,_Dhanusa,_Mahottar",
    "path": "Photos/17.avif",
  },
  { "name": "Prakash_Paudel_Rasuwa_&_Nuwakot", "path": "Photos/18.avif" },
  { "name": "Amit_Gupta,Rupandehi,Kapilvastu_&_Palp", "path": "Photos/19.avif" },
  { "name": "Gyanmani_Bhurtel_Jhapa_&_Ilam", "path": "Photos/20.avif" },
  { "name": "Andre_Dangi_Massachusetts", "path": "Photos/21.avif" },
  { "name": "shishpic-Aq26l2pMBbcJaB5l", "path": "Photos/22.avif" },
]

obj = []
for i in photos:
    name = i["name"]
    name = name.replace("_"," ")

    obj.append({"name":name,"path":i['path']})

print(obj)
# "Akas_Bisunkhe_Bhaktapur,Karve"