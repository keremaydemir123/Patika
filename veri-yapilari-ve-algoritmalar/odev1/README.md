# Insertion Sort -> [22,27,16,2,18,6]

## Aşamalar

1. Algoritma array içindeki en küçük değeri buluyor --> en küçük değer: 2, index: 3
2. 2 değeri arrayin ilk indexindeki değerle yer değiştiriliyor. --> yeni array: [2,27,16,22,18,6]
3. Algoritma bir sonraki indexten(1) başlayarak en küçük değeri buluyor --> en küçük değer: 6, index: 5
4. 6 değeri arrayin 1. indexindeki değerle yer değiştiriliyor. --> yeni array: [2,6,16,22,18,27]
5. Algoritma bir sonraki indexten(2) başlayarak en küçük değeri buluyor --> en küçük değer: 16, index: 2
6. 16 değeri arrayin olması gerektiği indexte olduğu için başka bir değerle yeri değiştirilmiyor. array: [2,6,16,22,18,27]
7. Algoritma bir sonraki indexten(3) başlayarak en küçük değeri buluyor --> en küçük değer: 18, index: 4
8. 18 değeri arrayin 3. indexindeki değerle yer değiştiriliyor. --> yeni array: [2,6,16,18,22,27]
9. son olarak [22,27] karşılaştırılıyor. 22 değeri en küçük değer olduğu için değiştirilme yapılmıyor. 
10. insertion sort kullanarak arrayın son hali: [2,6,16,18,22,27]


## Big-O-Notation: O(n^2)

Eğer n tane sayıyı sıralamak istersek bunun worst casinde, ilk olarak en küçük (en büyük de olabilir ama ben burada küçükten büyüğe doğru sıraladığımı varsayıyorum) sayıyı bulmak için:
1. n tane sayıyı karşılaştıracağım. 
2. (n-1) tane sayı
3. (n-2)
4. ...
5. 1

Toplam adım sayısını toplayacak olursak, 1 den n sayısına kadar olan sayıları toplamamız gerekiyor.

Bu da bize n * (n + 1) / 2 sonucunu veriyor. Yani (n^2 + n) / 2

Big-O-Notation'da katsayıların bir önemi yoktur ve eğer baskın bir terim var ise o baskın terim kullanılır. Sonuç olarak

(n^2 + n) / 2 ifadesi Big-O-Notation'da O(n^2) olarak gösterilir.


## Time Complexity 

Bu verilen array ve sort işlemi için:

### Average Case
Average case, aradığımız sonucun arrayın ortalarında olması demektir.

[22,27,16,2,18,6]

bizim arrayimizde 16 veya 2 sayısı aranan sonuç ise bu sayılara ulaşmak average case denilebilir.


### Worst Case
Worst case, aradığımız sonucun arrayın en sonlarında olması demektir.

[22,27,16,2,18,6]

eğer aranan sonuç 6 sayısı ise 6 sayısına ulaşmak bizim için worst case denilebilir.

### Best Case
Best case, aradığımız sonucun arrayın ilk başlkarında olması demektir.

[22,27,16,2,18,6]

eğer aranan sonuç 22 ise bu 22 sayısına ulaşmak diğerlerinden çabuk olacağı için, bizim için best case olacaktır.

## Dizi sıralandıktan sonra 18 hangi case durumuna giriyor?

Dizinin sıralanmış hali: [2,6,16,18,22,27]

eğer dizinin 0. indexinden başlıyorsak, 18 sayısına ulaşmadan önce 3 sayı ve 18 sayısından sonra da 2 sayı bulunmakta.

18 sayısı dizinin ortalarında yer almakta. Bu nedenlerle 18 sayısına ulaşmamız average case denilebilir.


## Insertion Sort --> [7,3,5,8,2,9,4,15,6]

1. 0.indexten başlanarak en küçük değer bulunuyor:2 --> 0. indexteki değerle yer değiştiriliyor --> [2,3,5,8,7,9,4,15,6]
2. 1.indexten başlanarak en küçük değer bulunuyor:3 --> yerinde olduğu için yer değiştirilmiyor --> [2,3,5,8,7,9,4,15,6]
3. 2.indexten başlanarak en küçük değer bulunuyor:4 --> 2. indexteki değerle yer değiştiriliyor --> [2,3,4,8,7,9,5,15,6]
4. 3.indexten başlanarak en küçük değer bulunuyor:5 --> 3. indexteki değerle yer değiştiriliyor --> [2,3,4,5,7,9,8,15,6]
5. 4.indexten başlanarak en küçük değer bulunuyor:6 --> 4. indexteki değerle yer değiştiriliyor --> [2,3,4,5,6,9,8,15,7]