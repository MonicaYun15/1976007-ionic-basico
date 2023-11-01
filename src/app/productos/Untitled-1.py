import re
br_regexp=re.compile(r"Bat(man|imovil|arang)")
mo=br_regexp.search("Batman y Robin subieron al Batimovil pero olvido su Batarang")
print(mo.group())
print(mo.group(1))
input()
mo=br_regexp.findall("Batman caiman Batmal y Robin subieron al Batimovil pero olvido su Batarang")
print(mo)
input()