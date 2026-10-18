# Crea una variante di Sofia Sans con le forme cirilliche classiche come predefinite.
import sys
from fontTools.ttLib import TTFont
src, dst = sys.argv[1], sys.argv[2]
f = TTFont(src); g = f['GSUB'].table
rus = [s for s in g.ScriptList.ScriptRecord if s.ScriptTag == 'cyrl'][0].Script.LangSysRecord[0].LangSys
subs = {}
for i in rus.FeatureIndex:
    fr = g.FeatureList.FeatureRecord[i]
    if fr.FeatureTag != 'locl': continue
    for li in fr.Feature.LookupListIndex:
        for st in g.LookupList.Lookup[li].SubTable:
            st = getattr(st, 'ExtSubTable', st)
            if hasattr(st, 'mapping'): subs.update(st.mapping)
for t in f['cmap'].tables:
    for cp, gl in list(t.cmap.items()):
        if gl in subs: t.cmap[cp] = subs[gl]
name = f['name']
for rec in name.names:
    if rec.nameID in (1, 4, 16):
        rec.string = str(rec.toUnicode()).replace('Sofia Sans', 'Zdravey Classic')
    elif rec.nameID == 6:
        rec.string = str(rec.toUnicode()).replace('SofiaSans', 'ZdraveyClassic')
f.save(dst)
print('ok', len(subs))
