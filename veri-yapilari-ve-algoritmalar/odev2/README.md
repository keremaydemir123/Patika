## Merge Sort --> [16,21,11,8,12,22]

## Aşamalar

1. 6 elemanlı diziyi ikili gruplara ayır
2. ikili grupları tek elemana düşür
3. ikili gruplardan ayrılan elemanları kendi içinde sırala ve tekrardan 2 elemanlı bir dizi elde et
4. diğer gruplardaki ikili dizilerle karşılaştır ve daha büyük sıralı parçalar elde et. dizi tamamen sıralanana kadar devam et

5. [16,21], [11,8], [12,22]
6. [16][21], [11][8], [12][22]
7. [16,21], [8,11], [12,22]
8. [8,11,16,21], [12,22] --> [8,11,12,16,21,22]

## Big-O-Notation --> O(nlogn)

Farzedelim ki n elemanlı bir diziyi merge sort ile sıralamak istiyoruz.

İlk olarak, her aşamada ne kadar işlem yaptığımıza bakalım.

Her aşamada ne kadar bölsek, parçalasak da n sayıda dizi elemanımız var bu yüzden her aşama için Time Complexity = O(n)

Peki kaç aşamamız var?

Yer aşamada ya diziyi ikiye bölüyoruz ya da 2 diziyi birleştiriyoruz. 2^(aşama sayısı) = n diyebiliriz

buradan aşama sayısını log2(n) olarak çözebiliriz.

Tüm bunlardan sonra, sonuç olarak aşama sayısı ve her aşamada yapılan işlem sayısını çarparak O(nlogn) sonucuna ulaşıyoruz.
